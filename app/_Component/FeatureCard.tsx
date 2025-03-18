'use client'

const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
        <div className="text-primary text-4xl mb-4">
          {typeof icon === "function" ? (
            <icon className="w-12 h-12 mx-auto" />
          ) : (
            <i className={`${icon} text-4xl`} />
          )}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
    )
  }
  
  export default FeatureCard
  
  