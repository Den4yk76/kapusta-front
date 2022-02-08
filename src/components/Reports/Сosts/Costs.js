import s from '../Сosts/Costs.module.css';
// import { ReactComponent as Back } from '../../../static/icons/back.svg';
// import { ReactComponent as Forward } from '../../../static/icons/forward.svg';
import { ReactComponent as Products } from '../../../static/icons/products.svg';
import { ReactComponent as Cocktail } from '../../../static/icons/cocktail.svg';
import { ReactComponent as Kite } from '../../../static/icons/kite.svg';
import { ReactComponent as Car } from '../../../static/icons/car.svg';
import { ReactComponent as Couch } from '../../../static/icons/couch.svg';
import { ReactComponent as Tools } from '../../../static/icons/tools.svg';
import { ReactComponent as Invoice } from '../../../static/icons/invoice.svg';
import { ReactComponent as Clay } from '../../../static/icons/clay.svg';
import { ReactComponent as Book } from '../../../static/icons/book.svg';
import { ReactComponent as Ufo } from '../../../static/icons/ufo.svg';

export default function Costs() {
  return (
    <>
      <ul className={s.grid}>
        <li className={s.gridItem}>
          <p className={s.titleSum}>5 000.00</p>
          <Products className={s.iconCategoriesActive} />
          <p className={s.titleIcons}>PRODUCTS</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>5 000.00</p>
          <div className={s.wrap}>
            <Cocktail />
          </div>
          <p className={s.titleIcons}>ALCOHOL</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>5 000.00</p>
          <Kite />
          <p className={s.titleIcons}>ENTERTAINMENT</p>
        </li>

        <li className={s.gridItem}>
          <p className={s.titleSum}>5 000.00</p>
          <Products />
          <p className={s.titleIcons}>HEALTH</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>5 000.00</p>
          <Car />
          <p className={s.titleIcons}>TRANSPORT</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>5 000.00</p>
          <Couch />
          <p className={s.titleIcons}>HOUSING</p>
        </li>

        <li className={s.gridItem}>
          <p className={s.titleSum}>5 000.00</p>
          <Tools />
          <p className={s.titleIcons}>TECHNICS</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>5 000.00</p>
          <Invoice />
          <p className={s.titleIcons}>UTILITIES, CONNECTION</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>5 000.00</p>
          <Clay />
          <p className={s.titleIcons}>SPORT, HOBBY</p>
        </li>

        <li className={s.gridItem}>
          <p className={s.titleSum}>5 000.00</p>
          <Book />
          <p className={s.titleIcons}>EDUCATION</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>5 000.00</p>
          <Ufo />
          <p className={s.titleIcons}>OTHER</p>
        </li>
      </ul>
    </>
  );
}
