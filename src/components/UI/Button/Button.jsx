const Button = (props) => {
    const {children, onClick, isActive, type, categoryBtn} = props;

    switch (categoryBtn) {
        case 'button':
            return (
                <button className={isActive ? 'button isActive' : 'button'} type={type} onClick={onClick}>
                    {children}
                </button>
            )
        case 'catalog-btn':
            return (
                <button className={isActive ? 'catalog-btn isActive' : 'catalog-btn'} type={type} onClick={onClick}>
                    {children}
                </button>
            )
        case 'auth-btn':
            return (
                <button className={isActive ? 'auth-btn button isActive' : 'auth-btn button'} type={type}
                        onClick={onClick}>
                    {children}
                </button>
            )
        case 'basket-btn':
            return (
                <button className={isActive ? 'button isActive' : 'button'} type={type} onClick={onClick}>
                    {children}
                </button>
            )

    }
}

export default Button