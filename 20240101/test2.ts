// カロリーの消費量を計算する数式を完成させたい
// カロリー = weight * Σ[n-2, i=0] ((2.5*vi - 6) * (ti+1 - ti)) / 3600 
// ex) (60, [[6,0], [4, 1800], [0, 3600]) -> return 390

function calculateCalories(weight: number, intervals: number[][]): number {
  let totalCalories = 0;

  for (let i = 0; i < intervals.length - 1; i++) {
    const vi = intervals[i][0];
    const ti = intervals[i][1];
    const ti1 = intervals[i + 1][1];

    totalCalories += (2.5 * vi - 6) * (ti1 - ti) / 3600;
  }

  return weight * totalCalories;
}

// Test case
console.log(calculateCalories(60, [[6, 0], [4, 1800], [0, 3600]])); // should print 390
