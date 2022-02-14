import Reports from '../Reports/Reports';
import { Link } from 'react-router-dom';

export default function ReportsView() {
  return (
    <Link to="/reports">
      <Reports />
    </Link>
  );
}
