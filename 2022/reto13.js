function getFilesToBackup(lastBackup, changes) {
    const filtered = changes.filter(([id, timeStamp]) => timeStamp > lastBackup);

    const confirmedChanges = filtered.map(([id]) => id);
    const onlyValues = Array.from(new Set(confirmedChanges));

    return onlyValues.sort((a, b) => a - b);
}

console.log(
    getFilesToBackup(1546300800, [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [3, 1546300900],
        [3, 1546301000],
        [3, 1546301100]
      ])
);

console.log(
    getFilesToBackup(1546300600, [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
        [3, 1546301100]
      ])
);

console.log(
    getFilesToBackup(1556300600, [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
        [3, 1546301100]
      ])
);

console.log(
    getFilesToBackup(1556300600, [])
);