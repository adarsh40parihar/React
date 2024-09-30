import Counter from "./Counter";

function CounterParent() {
  return (
    <div>
      <Counter initialValue={0}></Counter>
      <Counter initialValue={1}></Counter>
      <Counter initialValue={2}></Counter>
      <Counter initialValue={3}></Counter>
    </div>
  );
}
export default CounterParent;