import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getMonthReportTimeStamps } from '../../../shared/unix-time';
import { getIncomeData } from '../../../shared/api';
import categories from '../../../optionsIncome.json';
import { ReactComponent as Additional } from '../../../static/icons/additional_income.svg';
import { ReactComponent as Salary } from '../../../static/icons/salary.svg';
import { ReactComponent as Oval } from '../../../static/icons/oval.svg';
import Chart from '../../BarChart/BarChart';
import style from '../Income/Income.module.css';
import s from '../Сosts/Costs.module.css';
import { testData } from '../../../shared/test-data';
import ChartMobile from '../../BarChart/BarChartMobile';

export default function Income() {
  const [incomeData, setIncomeData] = useState([]);
  const [summaryState, setSummaryState] = useState(0);
  const [otherState, setOtherState] = useState(0);

  useEffect(() => {
    const today = new Date();
    const unixTimeStamps = getMonthReportTimeStamps(today);
    getIncomeData(unixTimeStamps.start, unixTimeStamps.end)
      .then(data => {
        const report = categories.map(category => {
          return {
            category: category.value,
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
        setIncomeData(result);
        setSummaryState(getAmount(result, 'salary').amount);
        setOtherState(getAmount(result, 'other').amount);
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

  return (
    <>
      <ul className={s.grid}>
        <li className={s.gridItem}>
          <p className={s.titleSum}>{summaryState}</p>
          <div className={style.wrapperIcon}>
            <Salary className={`${style.classIcon} ${style.classActiveIcon}`} />
            <Oval className={`${style.classOval} ${style.classActiveOval}`} />
          </div>
          <p className={s.titleIcons}>WAGE</p>
        </li>
        <li className={s.gridItem}>
          <p className={s.titleSum}>{otherState}</p>
          <div className={s.wrap}>
            <div className={style.wrapperIcon}>
              <Additional className={`${style.classIcon}`} />
              <Oval className={`${style.classOval}`} />
            </div>
          </div>
          <p className={s.titleIcons}>Additional income</p>
        </li>
      </ul>
      <div className={s.schedule}>
        <Chart data={incomeData} />
        <ChartMobile data={incomeData} />
      </div>
    </>
  );
}
