const userType = (type) => {
    switch (type) {
        case 0:
            return 'Guest';

        case 1:
            return 'User';

        case 2:
            return 'Redactor';

        case 3:
            return 'Administrator';

        default:
            return 'NOT_DEFINIED';
    }
};

export default userType;