interface ProgressBarProps {
  current: number;
  goal: number;
  title?: string;
  showStats?: boolean;
  className?: string;
}

export function ProgressBar({
  current,
  goal,
  title = "Funding Progress",
  showStats = true,
  className = ""
}: ProgressBarProps) {
  const percentage = Math.min((current / goal) * 100, 100);
  const remaining = Math.max(goal - current, 0);

  return (
    <div className={`bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-white mb-4 text-center">{title}</h3>
      )}

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Statistics */}
      {showStats && (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Raised</span>
            <span className="text-sm font-medium text-white">${current.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Goal</span>
            <span className="text-sm font-medium text-white">${goal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-white/10">
            <span className="text-sm text-gray-300">Progress</span>
            <span className="text-sm font-medium text-green-400">{percentage.toFixed(1)}%</span>
          </div>
          {remaining > 0 && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">Remaining</span>
              <span className="text-sm font-medium text-orange-400">${remaining.toLocaleString()}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
