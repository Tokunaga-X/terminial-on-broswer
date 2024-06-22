export default function TodayDate() {
  const renderDate = () => {
    const date = new Date();
    const options = { timeZone: "UTC" }; // 设置时区为UTC
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <div>
      <h1>Today is, {renderDate()}</h1>
    </div>
  );
}
