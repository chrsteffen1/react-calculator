
const getStlyeName = btn => {
  const className = {
    '=' : 'equals'
  }
  return className[btn]
}

const Button = ({value}) => {
  return (  
    <>
      <button className={`${getStlyeName(value)} button`}>{value}</button>
    </>
  );
}
 
export default Button;