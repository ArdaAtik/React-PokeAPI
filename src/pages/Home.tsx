import { useState } from "react";

export function Home() {
  const [changeItem, setChangeItem] = useState<string>("");
  const [ItemSubmitArray, setItemSubmitArray] = useState<string[]>([]);
  const [bool, setBool] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const customInputItem = [1, 2, 3];

  return (
    <>
      {customInputItem.map((item, index) => (
        <>
          <div>
            <CustomInput
              changeItem={changeItem}
              setChangeItem={setChangeItem}
              item={ItemSubmitArray}
              itemIndex={index}
              setItem={setItemSubmitArray}
              bool={bool}
              setBool={setBool}
            />
            <CustomForm
              changeItem={changeItem}
              setChangeItem={setChangeItem}
              item={ItemSubmitArray}
              itemIndex={index}
              setItem={setItemSubmitArray}
              bool={bool}
              setBool={setBool}
            />
          </div>
        </>
      ))}
    </>
  );
}

interface ItemProps {
  item: string[];
  itemIndex: number;
  changeItem: string;
  bool: boolean[];
  setItem: React.Dispatch<React.SetStateAction<string[]>>;
  setChangeItem: React.Dispatch<React.SetStateAction<string>>;
  setBool: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const CustomInput = ({
  itemIndex,
  item,
  setItem,
  bool,
  setBool,
  setChangeItem,
  changeItem,
}: ItemProps) => {
  const getInputIndex = () => {
    let val = 0;
    const equals = (a: boolean[], b: boolean[]) =>
      JSON.stringify(a) === JSON.stringify(b);
    const falses = [false, false, false, false, false];
    if (bool[0] == false) {
      val = 0;
    } else if (equals(bool, [true, ...falses.slice(1, 5)])) {
      val = 1;
    } else if (equals(bool, [true, true, ...falses.slice(2, 5)])) {
      val = 2;
    } else if (equals(bool, [true, true, true, ...falses.slice(3, 5)])) {
      val = 3;
    }
    return val;
  };
  console.log(getInputIndex());

  return !bool[itemIndex] ? (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (getInputIndex() == itemIndex) {
            setBool((prev) =>
              prev.map((bol, index) => (index === itemIndex ? !bol : bol))
            );
            setItem((prev) => (prev = [...prev, changeItem]));
            setChangeItem("");
          }
        }}
      >
        <input
          className="w-100"
          placeholder="Item"
          value={getInputIndex() === itemIndex ? changeItem : ""}
          onChange={(e) => {
            setChangeItem(
              (prev) => (getInputIndex() === itemIndex ? e.target.value : prev)

              // (prev = {
              //   ...prev,
              //   [itemIndex]: e.target.value,
              // })
            );
          }}
        />
        <button className="w-100" type="submit">
          Submit
        </button>
      </form>
    </div>
  ) : (
    <div></div>
  );
};
const CustomForm = ({ item, itemIndex, bool }: ItemProps) => {
  return bool[itemIndex] ? (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <ul className="text-white d-flex list-unstyled justify-content-between">
          <li>HP</li>
          <li>ATK</li>
          <li>DEF</li>
        </ul>
        <ul className="text-white d-flex list-unstyled justify-content-between">
          <li>{item[itemIndex]}</li>
        </ul>
      </form>
    </div>
  ) : (
    <div></div>
  );
};
