"use strict";

var CART = [];

function _el(id) {
  return document.getElementById(id);
}

function addToCard() {
  var title = _el('prod_title').value;

  var qty = _el('prod_qty').valueAsNumber;

  var price = _el('prod_price').valueAsNumber;

  if (title === '') {
    toast.error('Enter title');
    return;
  }

  if (isNaN(qty)) {
    toast.error('Enter quantity');
    return;
  }

  if (qty <= 0) {
    toast.error('Incorect quantity');
    return;
  }

  if (isNaN(price)) {
    toast.error('Enter price');
    return;
  }

  var prodIndex = CART.findIndex(function (prod) {
    return prod.title === title;
  });

  if (prodIndex === -1) {
    CART.push({
      title: title,
      qty: qty,
      price: price
    });
  } else {
    CART[prodIndex].qty += qty;
  }

  _el('prod_title').value = '';
  _el('prod_qty').valueAsNumber = 1;
  _el('prod_price').value = '';
  toast.success('Product added');
  productList(); // toast.success('Message text success')
  // toast.error('Message text error')
  // const newProd = {
  //     title:title,
  //     qty:qty,
  //     price:price
  // }
  // CART.push(newProd)
}

function productList() {
  var tbody = '';
  CART.forEach(function (prod, index) {
    tbody += "<tr>\n            <td>".concat(index + 1, "</td>\n            <td>").concat(prod.title, "</td>\n            <td><div class=\"input-group mb-3\">\n            <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeQty(").concat(index, ",'dec')\">-</button>\n            <input type=\"text\" class=\"form-control\" value=\"").concat(prod.qty, "\">\n            <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeQty(").concat(index, ",'inc')\">+</button>\n\n          </div></td>\n            <td>").concat(prod.price.toFixed(2), "</td>\n            <td>").concat((prod.qty * prod.price).toFixed(2), "</td>\n            <td>\n                <button type='button' class='btn btn-danger btn-sm' onclick='deleteProd(").concat(index, ",\"").concat(prod.title, "\")'>Remove</button>\n            </td>\n        </tr>");
  });
  _el('cart_tbody').innerHTML = tbody;
  _el('cart-total').innerHTML = sumProduct();
}

function deleteProd(index, title) {
  if (confirm("Do you want to delete ".concat(title, "?"))) {
    CART.splice(index, 1);
    productList();
    toast.success('Product was deleted');
  }
}

function sumProduct() {
  return CART.reduce(function (accum, prod) {
    return accum + prod.qty * prod.price;
  }, 0).toFixed(2);
}

function changeQty(index, action) {
  var qtyFirst = CART[index].qty;

  if (action === 'inc') {
    CART[index].qty++;
  } else if (action === 'dec') {
    if (qtyFirst === 1) {
      deleteProd(index, CART[index].title);
    } else {
      CART[index].qty--;
    }
  }

  productList();
}