import { CartItem } from '.';

export default function Cart({ cartItems, emptyCart }) {
  const totalItems: number = cartItems.reduce(
    (curr: number, item: CartItem) => curr + item.quantity,
    0
  );
  const totalDue: number = cartItems.reduce(
    (curr: number, item: CartItem) => curr + item.quantity * item.product.price,
    0
  );

  return (
    <div>
      {cartItems.length > 0 ? (
        <div>
          <h2>Shopping Cart</h2>
          <ul>
            {cartItems.map((item: CartItem) => (
              <li key={item.product.id}>
                {item.product.name} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>

          <h3>
            Total Items: {totalItems} {' - '}
            Total Price: ${totalDue.toFixed(2)}{' '}
          </h3>
          <button onClick={emptyCart}>Empty Cart</button>
        </div>
      ) : (
        <h3>Shopping Cart is Empty</h3>
      )}
    </div>
  );
}
