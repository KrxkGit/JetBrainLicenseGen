import {runCore} from "./core.js";

document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // 防止表单默认提交

    const formData = {
        name: document.getElementById('name').value,
        user: document.getElementById('user').value,
        mail: document.getElementById('mail').value,
        time: document.getElementById('time').value
    };

    // 存储到 localStorage
    localStorage.setItem("license", JSON.stringify(formData));

    // 生成 license
    runCore()
        .then((license) => {
            document.getElementById('output').value = license
        })
        .catch(err => {
            console.error(err)
        })
});
