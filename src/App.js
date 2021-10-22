import LineChart from './Charts/Line'
import MultiAxisLine from './Charts/Multi';
import VerticalBar from './Charts/VerticalBar';
import Horizontal_Bar from './Charts/Horizontal_Bar'
import MultiBarChart from './Charts/MultBar'
import PieChart from './Charts/PieChart';

function App() {
  return (
    <div className="App">
     <LineChart />
     <MultiAxisLine />
     <VerticalBar/>
     <Horizontal_Bar/>
     <MultiBarChart />
     <PieChart/>
    </div>
  );
}

export default App;
