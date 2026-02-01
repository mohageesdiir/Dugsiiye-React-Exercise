import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 rounded-xl bg-white px-4 py-5 mb-4">
        <div>
          <h1 className="text-xl font-semibold">Welcome back student!</h1>
          <p className="text-sm text-gray-500">
            Here what’s happening with your courses today.
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <span>🔔</span>
          <span className="text-xl">🧑🏼</span>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {[
          { icon: "📊", title: "Average Grade", value: "88%" },
          { icon: "📚", title: "Courses", value: "3" },
          { icon: "⏰", title: "Study Hours", value: "45h" },
          { icon: "📝", title: "Assignments", value: "12" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-3 flex gap-2 items-center"
          >
            <span>{item.icon}</span>
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <span className="font-semibold">{item.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">

        {/* COURSE PROGRESS */}
        <div className="bg-white lg:col-span-2 p-3 rounded-xl">
          <h2 className="font-semibold mb-3">Course Progress</h2>

          {[
            { title: "React Fundamentals", percent: "75%", next: "Components & Props", teacher: "Sarah Wilson" },
            { title: "JavaScript Advanced", percent: "45%", next: "Async/Await", teacher: "Mike Johnson" },
            { title: "UI/UX Design", percent: "90%", next: "Color Theory", teacher: "Emily Chen" },
          ].map((course, i) => (
            <div key={i} className="bg-gray-100 p-2 rounded-lg mb-2">
              <div className="flex justify-between">
                <h5 className="text-sm font-bold">{course.title}</h5>
                <span className="text-sm">{course.percent}</span>
              </div>

              <div className="bg-gray-300 h-2 rounded-full mt-2"></div>

              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-500">Next: {course.next}</span>
                <span className="text-xs text-gray-500">{course.teacher}</span>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-3">

          {/* ASSIGNMENTS */}
          <div className="bg-white p-3 rounded-xl">
            <h2 className="font-semibold mb-2">Upcoming Assignments</h2>

            <div className="flex justify-between mb-2">
              <div>
                <h3 className="text-sm font-bold">Build a Todo App</h3>
                <span className="text-xs text-gray-500">React Fundamentals</span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600">
                  pending
                </span>
                <span className="text-xs text-gray-400">Due 2024-03-20</span>
              </div>
            </div>

            <div className="flex justify-between mb-2">
              <div>
                <h3 className="text-sm font-bold">API Integration</h3>
                <span className="text-xs text-gray-500">JavaScript Advanced</span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                  completed
                </span>
                <span className="text-xs text-gray-400">Due 2024-03-18</span>
              </div>
            </div>
          </div>

          {/* ANNOUNCEMENTS */}
          <div className="bg-white p-3 rounded-xl">
            <h2 className="font-semibold mb-2">Announcements</h2>

            <div className="border-l-4 border-indigo-600 pl-3 mb-2">
              <p className="text-sm font-bold">New Course Available</p>
              <span className="text-xs text-gray-500">
                Check out new TypeScript course
              </span>
            </div>

            <div className="border-l-4 border-indigo-600 pl-3">
              <p className="text-sm font-bold">System Update</p>
              <span className="text-xs text-gray-500">
                Dashboard improvements released
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
