    let aboutMe = {
        name: 'Jori',
        age: 22,
        course: 'BSIS',

        introduce: function() {
            console.log(`Hi, my name is ${name} and I am ${age} years old.`);
        }
    }
    console.log(aboutMe.introduce)
    aboutMe.hobby = 'Dancing'
    console.log(aboutMe)