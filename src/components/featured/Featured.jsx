import './featured.scss'
import MoreVertIcon from"@mui/icons-material/MoreVert"
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className='featured'>
       <div className="top">
        <h1 className="title1">Total Revenue</h1>
            <MoreVertIcon fontSize='small' />
       </div>
       <div className="bottom">
          <div className="featuredChart">
           <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
          </div>
          <p className="Salestitle">Total Sales made today</p>
          <p className="SalesAmount">$420</p>
          <p className="SalesDesc">
            Previous transaction processing. Last payment may not be included
          </p>
          <div className="summary">
            <div className="summaryitem">
                <div className="itemTitle"> Target </div>
                <div className="itemresult negative">
                      <KeyboardArrowDownIcon fontSize='small'/>
                      <div className="resultAmount">$12.4k</div>
                </div>
            </div>
            <div className="summaryitem">
                <div className="itemTitle"> Last Week </div>
                <div className="itemresult positive">
                      <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                      <div className="resultAmount">$12.4k</div>
                </div>
            </div>
            <div className="summaryitem">
                <div className="itemTitle"> Last Month </div>
                <div className="itemresult positive">
                      <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                      <div className="resultAmount">$12.4k</div>
                </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Featured
