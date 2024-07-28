import React from 'react';

const RefundPolicy = () => {
  return (
    <div>
      <h1>Refund Policy</h1>
      <p>
        At idhs.in, we do our best to ensure that our registered users are immensely satisfied with the website features & services. We are happy to offer a complete refund in the following circumstances:
      </p>
      <ul>
        <li>
          (a) Subscribed package doesn't match your order.
        </li>
        <li>
          (b) The subscription amount will be valid till the validity of the particular subscription package. No refund is possible if the user de-subscribes before the validity period ends.
        </li>
      </ul>
      <h2>Following circumstances do not qualify for a Refund:</h2>
      <ul>
        <li>
          (a) Any wrong ordering of services doesn't qualify for a refund.
        </li>
      </ul>
      <h2>How to Request a Refund:</h2>
      <p>
        To request a refund, simply email us your order details, including the reason why you're requesting a refund, at <a href="mailto:support@idhs.in">support@idhs.in</a>.
      </p>
      <h2>Please Note:</h2>
      <p>
        The mode of refund may vary from case to case. If the mode of refund is by Credit/Debit Card or Net Banking, please allow 2-10 working days for the credit to appear in your account. If the mode of refund is by Wallet, the credit should be available within 7 to 10 working days. The refunded amount will be reversed in the same mode through which the payment has been done. For cash on delivery orders, the refund shall be processed in the bank account.
      </p>
    </div>
  );
};

export default RefundPolicy;
