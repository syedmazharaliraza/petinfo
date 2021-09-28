function onSubmit() {
    var info = [];
    info.push({
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        weight: document.getElementById('weight').value,
        type: document.getElementById('type').value,
        like: document.getElementById('like').value
    });
    console.log(info);
}