import RadioGroup from './RadioGroup';
import Radio from './Radio';

function App() {
  return (
    <div className="App">
      <RadioGroup>
        <Radio label="First" />
        <Radio label="Second" />
        <Radio label="Third" />
      </RadioGroup>
    </div>
  );
}

export default App;
