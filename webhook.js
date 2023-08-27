'use strict';
module.exports = (webhook) => {
  webhook.on('price', (session) => {
        if (session.kolvo < session.dostupno) {
          session.ans = (session.price + 500) * session.kolvo;
        }
        else {
          session.ans = "Такого количества на складе нет"
        }
            
        }
    );
}
