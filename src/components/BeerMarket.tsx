import * as elements from 'typed-html';
import { simulateReact } from '../simulateReact';

const AgeChecker = () => {
  const [age, setAge] = simulateReact.useState(0);
  
  const increaseAge = () => {
    setAge(age+1);
  }
  simulateReact.addOnClick("increaseAge", increaseAge);
  
  let isHigherThan18: string;
  simulateReact.useEffect(()=>{
    isHigherThan18 =  age > 18 ? "نوش :)" : "نه بچه ایی!!";
  }, [age, isHigherThan18]);
  return (
    <div>
      <p>آیا سن شما بزرگتر از 18 سال است ؟ <strong>{isHigherThan18}</strong></p>
      <h1>سن: {age}</h1>
      <button id="increaseAge">افزایش سن</button>
    </div>
  );
}

export default AgeChecker;