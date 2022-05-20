const HeaderOption = ({ Icon, title, selected }) => {
  return (
    <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-red-500 cursor:pointer hover:border-red-500 pb-3 transition-colors ${selected && 'text-red-500 border-red-500'}`}>
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;