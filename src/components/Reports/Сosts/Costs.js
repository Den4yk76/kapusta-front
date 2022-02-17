import { useCallback, useEffect, useState } from 'react';
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

export default function Costs() {
  const [expenseData, setExpenseData] = useState([]);
  const [product, setProduct] = useState(0);
  const [alcohol, setAlcohol] = useState(0);
  const [entertainment, setEntertainment] = useState(0);
  const [health, setHealth] = useState(0);
  const [transport, setTransport] = useState(0);
  const [housing, setHousing] = useState(0);
  const [utilityCommunication, setUtilityCommunication] = useState(0);
  const [technique, setTechnique] = useState(0);
  const [sportsHobbies, setSportsHobbies] = useState(0);
  const [education, setEducation] = useState(0);
  const [other, setOther] = useState(0);

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
          result.push({ category: el.category, amount: sum });
        });
        setExpenseData(result);
        setStates(result);
      })
      .catch(err => {
        console.log(err.response);
        toast.error(`Something went wrong! Please, try one more time`);
      });
  }, []);

  const getAmount = (data, category) => {
    return data.find(el => {
      return el.category === category;
    });
  };

  const setStates = useCallback(result => {
    setProduct(getAmount(result, 'products').amount);
    setAlcohol(getAmount(result, 'alcohol').amount);
    setEntertainment(getAmount(result, 'entertainment').amount);
    setHealth(getAmount(result, 'health').amount);
    setTransport(getAmount(result, 'transport').amount);
    setHousing(getAmount(result, 'housing').amount);
    setUtilityCommunication(getAmount(result, 'utilityCommunication').amount);
    setTechnique(getAmount(result, 'technique').amount);
    setSportsHobbies(getAmount(result, 'sportsHobbies').amount);
    setEducation(getAmount(result, 'education').amount);
    setOther(getAmount(result, 'other').amount);
  }, []);

  return (
    <>
      <ul className={s.grid}>
        <li className={s.gridItem}>
          <p className={s.titleSum}>{product}</p>
          <div className={style.wrapperIcon}>
            <Products className={`${style.classIcon}`} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>PRODUCTS</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>{alcohol}</p>
          <div className={s.wrap}>
            <div className={style.wrapperIcon}>
              <Cocktail className={s.iconCategories} />
              <Oval className={`${style.classOval}`} />
            </div>
          </div>
          <p className={s.titleIcons}>ALCOHOL</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>{entertainment}</p>
          <div className={style.wrapperIcon}>
            <Kite className={s.iconCategories} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>ENTERTAINMENT</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>{health}</p>
          <div className={style.wrapperIcon}>
            <Health className={s.iconCategories} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>HEALTH</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>{transport}</p>
          <div className={style.wrapperIcon}>
            <Car className={s.iconCategories} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>TRANSPORT</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>{housing}</p>
          <div className={style.wrapperIcon}>
            <Couch className={s.iconCategories} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>HOUSING</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>{technique}</p>
          <div className={style.wrapperIcon}>
            <Tools className={s.iconCategories} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>TECHNICS</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>{utilityCommunication}</p>
          <div className={style.wrapperIcon}>
            <Invoice className={s.iconCategories} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>UTILITIES, CONNECTION</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>{sportsHobbies}</p>
          <div className={style.wrapperIcon}>
            <Clay className={s.iconCategories} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>SPORT, HOBBY</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>{education}</p>
          <div className={style.wrapperIcon}>
            <Book className={s.iconCategories} />
            <Oval className={`${style.classOval}`} />
          </div>
          <p className={s.titleIcons}>EDUCATION</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>{other}</p>
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
