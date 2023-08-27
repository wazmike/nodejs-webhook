'use strict';
module.exports = (webhook) => {
  webhook.on('price', (session) => {
            ans = session.price * 22;
        }
    );
}
