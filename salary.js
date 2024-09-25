function salary(input) {
    let tabsCount = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let curWebsite = input[i];

        if (curWebsite === "Facebook") {
            salary -= 150;
        } else if (curWebsite === "Instagram") {
            salary -= 100;
        } else if (curWebsite === "Reddit") {
            salary -= 50;
        }
        if (salary <= 0) {
            break;
        }
    }

    if (salary <= 0) {
        console.log("You have lost your salary.")
    } else {
        console.log(salary);
    }
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])


