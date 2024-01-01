// AND/OR回路
// input1はAND1を通じてOUTPUTに接続されます。
// input2はAND2、OR1、AND1を順に通じてOUTPUTに接続されます。
// input3はAND2、OR1、AND1を順に通じてOUTPUTに接続されます。
// input4はOR1、AND1を順に通じてOUTPUTに接続されます。
// input2とinput3は同じANDに接続され、その後の出力とinput4は同じORに接続されます。
// という回路が存在します。
// ex) simulate(true, false, false, true) => return true
// この回路に対する関数を記述するための TypeScript コードを以下に示します。
// TODO: 未完成なので追記する

function simulate(input1: boolean, input2: boolean,
  input3: boolean, input4: boolean): boolean {
  // AND1
  const and1_output: boolean = input1;

  // AND2
  const and2_output: boolean = input2 && and1_output;

  // OR1
  const or1_output: boolean = (input3 && and1_output) || (input3 && and2_output);

  // OR2
  const output: boolean = or1_output || (and1_output && input4);

  return output;
}

// Test cases
console.log(simulate(true, false, false, true)); // should print true
console.log(simulate(true, true, true, true));   // should print true
console.log(simulate(false, false, false, false)); // should print false