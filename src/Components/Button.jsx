
const getStlyeName = btn => {
  const className = {
    '=' : 'equals'
  }
  return className[btn]
}

const Button = ({onClick, value}) => {
  return (  
    <>
      <button className={`${getStlyeName(value)} button`} onClick={onClick}>{value}</button>
    </>
  );
}
 
export default Button;