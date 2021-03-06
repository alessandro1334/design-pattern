namespace BuilderSolution {
    // Cara Pertama
    class User {
        public name: string = '';
        public username: string = '';
        public password: string = '';
        public email: string = '';
        public phone: string = '';
        public age: number = 0;

        getDetails() {
            return `${this.name} username = ${this.username}`;
        }
    }

    class UserBuilder {
        private user : User;

        constructor() {
            this.user = new User();
        }

        setName (value: string) {
            this.user.name = value;
            return this;
        }

        setUsername (value: string) {
            this.user.username = value;
            return this;
        }

        setPassword (value: string) {
            this.user.password = value;
            return this;
        }

        setPhone (value: string) {
            this.user.phone = value;
            return this;
        }

        setAge (value: number) {
            this.user.age = value;
            return this;
        }

        build() {
            return this.user;
        }
    }
    const user1 = new UserBuilder() 
                .setName('Alessandro')
                .setUsername('alessandro')
                .setAge(22)
                .build();
    console.log(user1);

    // Cara Kedua

    class User2 {
        public name: string; 
        public username: string; 
        public password: string; 
        public email: string; 
        public phone: string; 
        public age: number;

        constructor({ name = '', username = '', password = '', email = '', phone = '', age = 0 } = {}) {
            this.name = name;
            this.username = username;
            this.password = password;
            this.email = email;
            this.phone = phone;
            this.age = age;

        }

        getDetails() {
            return `${this.name} username = ${this.username}`;
        }
    }

    const user2 = new User2({ name: 'Alessandro', username: 'alessandro', age: 23});
    console.log(user2);
}

