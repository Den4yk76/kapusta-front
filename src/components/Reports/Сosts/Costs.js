import { useEffect, useState } from 'react';
import s from '../Сosts/Costs.module.css';
import style from '../Income/Income.module.css';
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
import { ReactComponent as Health } from '../../../static/icons/health.svg';
import { ReactComponent as Oval } from '../../../static/icons/oval.svg';
import Chart from '../../BarChart/BarChart';
import categories from '../../../optionsExpense.json';
import { getMonthReportTimeStamps } from '../../../shared/unix-time';
import { getExpenseData } from '../../../shared/api';
import { toast } from 'react-toastify';
import { testData } from '../../../shared/test-data';

export default function Costs({ data }) {
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    const today = new Date();
    const unixTimeStamps = getMonthReportTimeStamps(today);
    getExpenseData(unixTimeStamps.start, unixTimeStamps.end)
      .then(data => {
        const report = categories.map(category => {
          return {
            category: category.value,
            // reports: data.filter(el => el.category === category.value),
            reports: testData.filter(el => el.category === category.value),
          };
        });
        const result = [];
        report.map(el => {
          const sum = el.reports.reduce((acc, el) => {
            return acc + Number(el.count);
          }, 0);
          result.push([el.category, sum]);
        });
        setExpenseData(result);
      })
      .catch(err => {
        console.log(err.response);
        toast.error(`Something went wrong! Please, try one more time`);
      });
  }, []);

  return (
    <>
      <ul className={s.grid}>
        <li className={s.gridItem}>
          {/* <p className={s.titleSum}>{getSum('products')}</p> */}
          <div className={style.wrapperIcon}>
            <Products className={`${style.classIcon}`} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>PRODUCTS</p>
        </li>
        <li className={s.gridItem}>
          {/* <p className={s.titleSum}>{getSum('alcohol')}</p> */}
          <div className={s.wrap}>
            <div className={style.wrapperIcon}>
              <Cocktail className={s.iconCategories} />
              <Oval className={`${style.classOval}`} />
            </div>
          </div>
          <p className={s.titleIcons}>ALCOHOL</p>
        </li>
        <li className={s.gridItem}>
          {/* <p className={s.titleSum}>{getSum('entertainment')}</p> */}
          <div className={style.wrapperIcon}>
            <Kite className={s.iconCategories} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>ENTERTAINMENT</p>
        </li>
        <li className={s.gridItem}>
          {/* <p className={s.titleSum}>{getSum('health')}</p> */}
          <div className={style.wrapperIcon}>
            <Health className={s.iconCategories} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>HEALTH</p>
        </li>
        <li className={s.gridItem}>
          {/* <p className={s.titleSum}>{getSum('transport')}</p> */}
          <div className={style.wrapperIcon}>
            <Car className={s.iconCategories} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>TRANSPORT</p>
        </li>
        <li className={s.gridItem}>
          {/* <p className={s.titleSum}>{getSum('housing')}</p> */}
          <div className={style.wrapperIcon}>
            <Couch className={s.iconCategories} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>HOUSING</p>
        </li>
        <li className={s.gridItem}>
          {/* <p className={s.titleSum}>{getSum('technics')}</p> */}
          <div className={style.wrapperIcon}>
            <Tools className={s.iconCategories} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>TECHNICS</p>
        </li>
        <li className={s.gridItem}>
          {/* <p className={s.titleSum}>{getSum('utilityCommunication')}</p> */}
          <div className={style.wrapperIcon}>
            <Invoice className={s.iconCategories} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>UTILITIES, CONNECTION</p>
        </li>
        <li className={s.gridItem}>
          {/* <p className={s.titleSum}>{getSum('sportsHobbies')}</p> */}
          <div className={style.wrapperIcon}>
            <Clay className={s.iconCategories} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>SPORT, HOBBY</p>
        </li>
        <li className={s.gridItem}>
          {/* <p className={s.titleSum}>{getSum('education')}</p> */}
          <div className={style.wrapperIcon}>
            <Book className={s.iconCategories} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>EDUCATION</p>
        </li>
        <li className={s.gridItem}>
          {/* <p className={s.titleSum}>{getSum('other')}</p> */}
          <div className={style.wrapperIcon}>
            <Ufo className={s.iconCategories} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>OTHER</p>
        </li>
      </ul>
      <div className={s.schedule}>
        <Chart data={expenseData} />
      </div>
    </>
  );
}
