const stats = [
  {
    icon: "instagram",
    iconType: "fab",
    value: "78.2K",
    label: "Followers",
    color: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    icon: "play",
    iconType: "fas",
    value: "330K",
    label: "Avg Daily Views",
    color: "bg-gradient-to-r from-blue-500 to-cyan-400"
  },
  {
    icon: "calendar-alt",
    iconType: "fas",
    value: "10M",
    label: "Avg Monthly Views",
    color: "bg-gradient-to-r from-green-500 to-emerald-400"
  },
  {
    icon: "globe",
    iconType: "fas",
    value: ["Global Audience"],
    label: "Demographics",
    color: "bg-gradient-to-r from-amber-500 to-yellow-300"
  },
  {
    icon: "user-friends",
    iconType: "fas",
    value: "18-34",
    label: "Top Age Range",
    color: "bg-gradient-to-r from-red-500 to-orange-400"
  },
];

export const Statistics = () => {
  return (
    <section id="statistics" className="py-16">
      <div className="container mx-auto px-4">
        <div className='text-center mb-12'>
          <h2 className="section-title">Our Statistics</h2>
          <p className="section-description mt-5">
            We reach over 10M people a month with our content.
          </p>
        </div>

        <div className="flex flex-col items-center">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 w-full max-w-6xl">
            {stats.slice(0, 3).map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {stats.slice(3).map((stat, index) => (
              <StatCard key={index + 3} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      {/* Icon container with dynamic gradient */}
      <div className={`flex items-center justify-center w-16 h-16 rounded-full ${stat.color} text-white mb-6`}>
        <i className={`${stat.iconType} fa-${stat.icon} fa-xl`}></i>
      </div>
      
      <div className="space-y-3">
        {/* Main value */}
        <h3 className="text-4xl font-bold text-gray-900">{stat.value}</h3>
        
        {/* Handle array values (for Demographics) */}
        {Array.isArray(stat.value) ? (
          <div className="space-y-2">
            {stat.value.map((item, i) => (
              <p key={i} className="text-gray-600">{item}</p>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-lg">{stat.label}</p>
        )}
      </div>
    </div>
  );
};