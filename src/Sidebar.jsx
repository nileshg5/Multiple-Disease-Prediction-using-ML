import './Sidebar.css';
const Sidebar = ({selectedOption, setSelectedOption}) => {
      console.log('Sidebar rendered with selectedOption:', selectedOption);
    return (
        <div className="Sidebar">
            <h1>Multiple Disease Prediction System</h1>
            <ul>
                <li className={selectedOption === 'Diabetes Prediction' ? 'active' : ''}
          onClick={() => setSelectedOption('Diabetes Prediction')}>Diabetes Prediction</li>
                <li className={selectedOption === 'Heart Disease Prediction' ? 'active' : ''}
          onClick={() => setSelectedOption('Heart Disease Prediction')}>Heart Disease Prediction</li>
                <li className={selectedOption === 'Breast Cancer Prediction' ? 'active' : ''}
          onClick={() => setSelectedOption('Breast Cancer Prediction')}>Breast Cancer Prediction</li>
                <li  className={selectedOption === 'Parkinsons Disease Prediction' ? 'active' : ''}
          onClick={() => setSelectedOption('Parkinsons Disease Prediction')}>Parkinson's Disease Prediction</li>
            </ul>
        </div>
    )
}
export default Sidebar;
