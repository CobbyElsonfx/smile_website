const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-emerald-500 text-white hover:bg-emerald-600',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-emerald-500'
  };

  return (
    <button 
      className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 