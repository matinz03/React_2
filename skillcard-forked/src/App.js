import "./styles.css";
const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
const skillsList = [
  {
    skill: "HTML + CSS",
    level: "basic",
    color: getRandomColor(),
  },
  { skill: "Python", level: "basic", color: getRandomColor() },
  {
    skill: "JS",
    level: "intermediate",
    color: getRandomColor(),
  },
  {
    skill: "TS",
    level: "beginner",
    color: getRandomColor(),
  },
  { skill: "React", level: "basic", color: getRandomColor() },
];

export default function App() {
  return (
    <main className="card">
      <img className="avatar" src="./photo_2024-01-08_15-29-30.jpg" alt="" />
      <h1 className="data">{name}</h1>
      <p className="skill"> {aboutMe} </p>
      <div className="skill-list">
        {skillsList.map((element) => {
          return (
            <div>
              <span
                className="skill-list"
                style={{
                  backgroundColor: element.color,
                  gap: "0px",
                  marginBottom: "0px",
                }}
              >
                {element.skill}
              </span>
              <span
                className="skill-list"
                style={{
                  backgroundColor: element.color,
                  gap: "0px",
                  marginTop: 2,
                  borderRadius: 10,
                }}
              >
                {element.level}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
const name = "Matin Zomorrodabedi";
const aboutMe =
  "I'm a full-time computer engineering student who's currently striving to become exceedingly good at web development and to reach greater heights.";
