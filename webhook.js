'use strict';
module.exports = (webhook) => {
  webhook.on('price', (session) => {
            session.ans = session.price * 22;
        }
    );
}
