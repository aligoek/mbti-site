import React from 'react';
import { useParams } from 'react-router-dom';

const PersonalityDetailPage = () => {
  const { typeId } = useParams(); // Get the type from the URL, e.g., 'intj'

  // Detailed data for all 16 MBTI types
  const detailedMbtiData = {
    "istj": {
      name: "The Logistician",
      overview: "ISTJs are practical, fact-minded, and highly responsible individuals. They value traditions and duties, enjoying operating with order and efficiency. They are typically quiet and observant, but once they commit to something, they work with persistence to get the job done.",
      characteristics: [
        "Highly organized and methodical",
        "Reliable and responsible",
        "Detail-oriented and realistic",
        "Adherent to traditions and rules",
        "Makes calm and logical decisions"
      ],
      cognitiveFunctions: {
        dominant: "Introverted Sensing (Si): Gathers information from past experiences and concrete facts, remembers details, and values stability.",
        auxiliary: "Extraverted Thinking (Te): Establishes logical systems, seeks efficiency, and organizes the external world to achieve goals.",
        tertiary: "Introverted Feeling (Fi): Adheres to personal values and moral principles, seeks internal harmony.",
        inferior: "Extraverted Intuition (Ne): May struggle with exploring new ideas and possibilities, can be uncomfortable with uncertainty."
      },
      areasForGrowth: [
        "Developing emotional expression and being more open to others' feelings.",
        "Approaching changes and new ideas with more flexibility.",
        "Making more room for spontaneous experiences.",
        "Approaching criticism more constructively."
      ],
      compatibilityNotes: "Often get along well with spontaneous and extraverted types like ESFPs and ESTPs, as these types can bring new experiences and flexibility into the ISTJ's world.",
      famousPersonalities: ["George Washington", "Angela Merkel", "Warren Buffett"],
      careerPaths: ["Accountant", "Auditor", "Police Officer", "Judge", "Military Leader", "Administrator"]
    },
    "isfj": {
      name: "The Defender",
      overview: "ISFJs are dedicated and warm protectors. They are highly committed to helping others and are generally quiet, yet extremely observant and detail-oriented. They find great satisfaction in serving their communities and loved ones.",
      characteristics: [
        "Loyal and reliable",
        "Empathetic and compassionate",
        "Practical and responsible",
        "Pays attention to details",
        "Seeks harmony and peace"
      ],
      cognitiveFunctions: {
        dominant: "Introverted Sensing (Si): Perceives the world based on past experiences and concrete information, remembers details, and values security.",
        auxiliary: "Extraverted Feeling (Fe): Understands others' emotions and strives to create harmony, values social norms.",
        tertiary: "Introverted Thinking (Ti): Seeks internal logic and consistency, analyzes information internally.",
        inferior: "Extraverted Intuition (Ne): May struggle with exploring new ideas and possibilities, can be uncomfortable with uncertainty."
      },
      areasForGrowth: [
        "Being more assertive in expressing their own needs and setting boundaries.",
        "Dealing with conflicts more constructively.",
        "Not shying away from taking risks and stepping out of their comfort zone.",
        "Being more open to criticism."
      ],
      compatibilityNotes: "Often get along well with extraverted and spontaneous types like ESTPs and ESFPs, as these types can bring joy and new experiences into the ISFJ's life.",
      famousPersonalities: ["Queen Elizabeth II", "Mother Teresa", "Beyoncé"],
      careerPaths: ["Nurse", "Teacher", "Social Worker", "Counselor", "Librarian", "Human Resources"]
    },
    "infj": {
      name: "The Advocate",
      overview: "INFJs are quiet and mystical, yet very inspiring and tireless idealists. They are driven by a deep sense of purpose and a desire to serve humanity. They possess complex inner worlds and strong intuitions.",
      characteristics: [
        "Visionary and idealistic",
        "Empathetic and compassionate",
        "Complex and deep thinkers",
        "Private and introverted",
        "Determined and persistent"
      ],
      cognitiveFunctions: {
        dominant: "Introverted Intuition (Ni): Sees deep insights and patterns for the future, seeks symbolic meanings, and develops long-term visions.",
        auxiliary: "Extraverted Feeling (Fe): Understands others' emotional needs and strives to create harmony, values social values.",
        tertiary: "Introverted Thinking (Ti): Seeks internal logic and consistency, analyzes information internally.",
        inferior: "Extraverted Sensing (Se): May focus less on immediate sensory experiences and practical details, sometimes appearing detached from reality."
      },
      areasForGrowth: [
        "Setting boundaries and avoiding excessive self-sacrifice.",
        "Expressing negative emotions like anger constructively.",
        "Focusing more on the present moment and trying to be spontaneous.",
        "Letting go of the desire to save everyone."
      ],
      compatibilityNotes: "Can form deep connections with extraverted and intuitive types like ENTPs and ENFPs, as these types appreciate INFJs' visions and offer them new perspectives.",
      famousPersonalities: ["Martin Luther King Jr.", "Nelson Mandela", "Mahatma Gandhi", "Oprah Winfrey"],
      careerPaths: ["Counselor", "Writer", "Psychologist", "Human Resources", "Artist", "Social Activist"]
    },
    "intj": {
      name: "The Architect",
      overview: "INTJs are imaginative and strategic thinkers. They often have a strong desire to improve the world. They are independent thinkers who value logic and efficiency above all else. They are known for their ability to see the big picture and develop long-term plans.",
      characteristics: [
        "Highly analytical and logical",
        "Independent and self-sufficient",
        "Strategic and visionary",
        "Driven by competence and knowledge",
        "Can be perceived as aloof or reserved"
      ],
      cognitiveFunctions: {
        dominant: "Introverted Intuition (Ni): Sees deep insights and patterns for the future, seeks symbolic meanings, and develops long-term visions.",
        auxiliary: "Extraverted Thinking (Te): Establishes logical systems, seeks efficiency, and organizes the external world to achieve goals.",
        tertiary: "Introverted Feeling (Fi): Adheres to personal values and moral principles, seeks internal harmony.",
        inferior: "Extraverted Sensing (Se): May focus less on immediate sensory experiences and practical details, sometimes appearing detached from reality."
      },
      areasForGrowth: [
        "Developing emotional expression and empathy.",
        "Being open to more spontaneous experiences.",
        "Avoiding being overly critical of others.",
        "Learning to delegate and trust others."
      ],
      compatibilityNotes: "Often compatible with ENTPs and ENFPs due to shared intuition and complementary thinking/feeling functions. ENTPs can challenge INTJs' ideas, helping them to refine them further, while ENFPs can add emotional depth and warmth.",
      famousPersonalities: ["Elon Musk", "Isaac Newton", "Stephen Hawking", "Mark Zuckerberg"],
      careerPaths: ["Scientist", "Engineer", "Strategist", "Architect", "Researcher", "Software Developer"]
    },
    "istp": {
      name: "The Virtuoso",
      overview: "ISTPs are bold and practical experimenters. They are curious and masters of tools and hands-on problem-solving. They live in the moment and enjoy exploring and understanding the world around them.",
      characteristics: [
        "Observant and analytical",
        "Logical and independent",
        "Adaptable and spontaneous",
        "Enjoys working with their hands",
        "Calm and composed"
      ],
      cognitiveFunctions: {
        dominant: "Introverted Thinking (Ti): Seeks internal logic and consistency, analyzes information internally, and tries to understand systems.",
        auxiliary: "Extraverted Sensing (Se): Focuses on immediate sensory experiences, explores their environment, and finds practical solutions.",
        tertiary: "Introverted Intuition (Ni): Can see insights and patterns for the future, but this function is less developed.",
        inferior: "Extraverted Feeling (Fe): May struggle with understanding others' emotional needs and creating harmony."
      },
      areasForGrowth: [
        "Better understanding and expressing their emotions.",
        "Making long-term plans and sticking to commitments.",
        "Learning to collaborate with others.",
        "Being more emotionally open."
      ],
      compatibilityNotes: "Often get along well with organized and social types like ESTJs and ESFJs, as these types appreciate ISTPs' practicality and independence while providing them with structure and social connections.",
      famousPersonalities: ["Clint Eastwood", "Bear Grylls", "Bruce Lee", "Chuck Yeager"],
      careerPaths: ["Mechanic", "Engineer", "Pilot", "Artisan", "Emergency Worker", "Athlete"]
    },
    "isfp": {
      name: "The Adventurer",
      overview: "ISFPs are flexible and charming artists. They live in the moment and enjoy exploring the world through their senses. They are creative, sensitive, and often quiet, but possess a deep passion and aesthetic appreciation.",
      characteristics: [
        "Creative and artistic",
        "Sensitive and empathetic",
        "Adaptable and spontaneous",
        "Kind and independent",
        "Values aesthetics"
      ],
      cognitiveFunctions: {
        dominant: "Introverted Feeling (Fi): Adheres to personal values and moral principles, seeks internal harmony, and has emotional depth.",
        auxiliary: "Extraverted Sensing (Se): Focuses on immediate sensory experiences, explores their environment, and finds practical solutions.",
        tertiary: "Introverted Intuition (Ni): Can see insights and patterns for the future, but this function is less developed.",
        inferior: "Extraverted Thinking (Te): May struggle with establishing logical systems and organizing the external world."
      },
      areasForGrowth: [
        "Developing planning and future-oriented thinking skills.",
        "Dealing with criticism more constructively.",
        "Expressing their own needs and boundaries more clearly.",
        "Managing their emotional intensity."
      ],
      compatibilityNotes: "Often get along well with organized and social types like ESTJs and ESFJs, as these types appreciate ISFPs' artistic spirit and sensitivity while providing them with structure and support.",
      famousPersonalities: ["Michael Jackson", "Frida Kahlo", "Britney Spears", "Avril Lavigne"],
      careerPaths: ["Artist", "Musician", "Designer", "Therapist", "Nature Guide", "Dancer"]
    },
    "infp": {
      name: "The Mediator",
      overview: "INFPs are poetic, kind, and altruistic people. They are driven by deep personal values and a desire for harmony. They are idealistic, creative, and curious, filled with a desire to make the world a better place.",
      characteristics: [
        "Idealistic and dreamy",
        "Empathetic and compassionate",
        "Creative and original",
        "Curious and flexible",
        "Deeply committed to values"
      ],
      cognitiveFunctions: {
        dominant: "Introverted Feeling (Fi): Adheres to personal values and moral principles, seeks internal harmony, and has emotional depth.",
        auxiliary: "Extraverted Intuition (Ne): Explores new ideas and possibilities, makes connections, and generates inspiring thoughts.",
        tertiary: "Introverted Sensing (Si): Gathers information from past experiences and concrete facts, remembers details, and values stability.",
        inferior: "Extraverted Thinking (Te): May struggle with establishing logical systems and organizing the external world."
      },
      areasForGrowth: [
        "Focusing more on practical details and seeing tasks through to completion.",
        "Dealing with conflicts more constructively.",
        "Being more decisive in decision-making processes.",
        "Being less self-critical."
      ],
      compatibilityNotes: "Can form deep connections with extraverted and visionary types like ENFJs and ENTJs, as these types appreciate INFPs' idealism and offer them a supportive structure.",
      famousPersonalities: ["William Shakespeare", "J.R.R. Tolkien", "Johnny Depp", "Virginia Woolf"],
      careerPaths: ["Writer", "Counselor", "Artist", "Psychologist", "Educator", "Social Services"]
    },
    "intp": {
      name: "The Logician",
      overview: "INTPs are innovative inventors with an unquenchable thirst for knowledge. They are logical, abstract, and independent thinkers. They greatly enjoy solving complex problems and developing new theories.",
      characteristics: [
        "Logical and analytical",
        "Abstract and theoretical",
        "Independent and innovative",
        "Curious and inquisitive",
        "Can be socially reserved sometimes"
      ],
      cognitiveFunctions: {
        dominant: "Introverted Thinking (Ti): Seeks internal logic and consistency, analyzes information internally, and tries to understand systems.",
        auxiliary: "Extraverted Intuition (Ne): Explores new ideas and possibilities, makes connections, and generates inspiring thoughts.",
        tertiary: "Introverted Sensing (Si): Gathers information from past experiences and concrete facts, remembers details, and values stability.",
        inferior: "Extraverted Feeling (Fe): May struggle with understanding others' emotional needs and creating harmony."
      },
      areasForGrowth: [
        "Developing social skills and interacting more with others.",
        "Improving their emotional expression.",
        "Translating theoretical knowledge into practical applications.",
        "Paying more attention to details."
      ],
      compatibilityNotes: "Often get along well with extraverted and organized types like ENTJs and ESTJs, as these types appreciate INTPs' intellectual depth and can provide them with structure and connection to the external world.",
      famousPersonalities: ["Albert Einstein", "Bill Gates", "Isaac Asimov", "Marie Curie"],
      careerPaths: ["Scientist", "Professor", "Software Developer", "Philosopher", "Researcher", "Engineer"]
    },
    "estp": {
      name: "The Entrepreneur",
      overview: "ESTPs are smart, energetic, and very perceptive people. They live in the moment and enjoy action and excitement. They are bold, practical, and social, often possessing a natural leadership ability.",
      characteristics: [
        "Bold and direct",
        "Practical and realistic",
        "Social and charming",
        "Adaptable and spontaneous",
        "Not afraid to take risks"
      ],
      cognitiveFunctions: {
        dominant: "Extraverted Sensing (Se): Focuses on immediate sensory experiences, explores their environment, and finds practical solutions.",
        auxiliary: "Introverted Thinking (Ti): Seeks internal logic and consistency, analyzes information internally, and tries to understand systems.",
        tertiary: "Extraverted Feeling (Fe): Understands others' emotional needs and strives to create harmony, values social norms.",
        inferior: "Introverted Intuition (Ni): May struggle with seeing future insights and patterns, can be weak in long-term planning."
      },
      areasForGrowth: [
        "Developing long-term planning skills.",
        "Increasing emotional sensitivity and paying more attention to others' feelings.",
        "Being more consistent in seeing tasks through to completion.",
        "Developing patience."
      ],
      compatibilityNotes: "Often get along well with organized and introverted types like ISFJs and ISTJs, as these types can balance ESTPs' energy and spontaneity and provide them with structure.",
      famousPersonalities: ["Ernest Hemingway", "Donald Trump", "Madonna", "Jack Nicholson"],
      careerPaths: ["Salesperson", "Entrepreneur", "Athlete", "Police Officer", "Marketer", "Emergency Responder"]
    },
    "esfp": {
      name: "The Entertainer",
      overview: "ESFPs are spontaneous, energetic, and enthusiastic people. They love being the center of attention and bringing joy to others. They are known for their social, optimistic, and adaptable nature, enjoying living in the moment and having fun.",
      characteristics: [
        "Extraverted and social",
        "Optimistic and enthusiastic",
        "Adaptable and spontaneous",
        "Practical and charming",
        "Loves entertainment"
      ],
      cognitiveFunctions: {
        dominant: "Extraverted Sensing (Se): Focuses on immediate sensory experiences, explores their environment, and finds practical solutions.",
        auxiliary: "Introverted Feeling (Fi): Adheres to personal values and moral principles, seeks internal harmony, and has emotional depth.",
        tertiary: "Extraverted Thinking (Te): Establishes logical systems, seeks efficiency, and organizes the external world to achieve goals.",
        inferior: "Introverted Intuition (Ni): May struggle with seeing future insights and patterns, can be weak in long-term planning."
      },
      areasForGrowth: [
        "Developing long-term planning skills.",
        "Not shying away from confronting conflicts.",
        "Sticking to commitments and developing discipline.",
        "Being more careful with financial matters."
      ],
      compatibilityNotes: "Often get along well with organized and introverted types like ISTJs and ISFJs, as these types can balance ESFPs' energy and provide them with stability.",
      famousPersonalities: ["Marilyn Monroe", "Jamie Oliver", "Elvis Presley", "Will Smith"],
      careerPaths: ["Artist", "Event Planner", "Sales", "Teacher", "Fashion Designer", "Social Media Specialist"]
    },
    "enfp": {
      name: "The Campaigner",
      overview: "ENFPs are enthusiastic, creative, and sociable free spirits. They are often the life of the party. They are driven by their values and a desire to connect with others and explore new possibilities. They are harmonious and enjoy inspiring others.",
      characteristics: [
        "Enthusiastic and energetic",
        "Creative and imaginative",
        "Social and charming",
        "Values authenticity and connection",
        "Can be easily distracted or overcommit"
      ],
      cognitiveFunctions: {
        dominant: "Extraverted Intuition (Ne): Explores new ideas and possibilities, makes connections, and generates inspiring thoughts.",
        auxiliary: "Introverted Feeling (Fi): Adheres to personal values and moral principles, seeks internal harmony, and has emotional depth.",
        tertiary: "Extraverted Thinking (Te): Establishes logical systems, seeks efficiency, and organizes the external world to achieve goals.",
        inferior: "Introverted Sensing (Si): May focus less on details and routines, sometimes struggling with practical matters."
      },
      areasForGrowth: [
        "Developing organization and follow-through skills.",
        "Managing emotional intensity.",
        "Learning to say 'no' to prevent burnout.",
        "Focusing on practical details when needed."
      ],
      compatibilityNotes: "Often compatible with INTJs and INFJs due to shared intuition and complementary thinking/feeling functions. INTJs can add structure and logic to ENFPs' ideas, while INFJs can provide deep emotional connection and understanding.",
      famousPersonalities: ["Walt Disney", "Robin Williams", "Ellen DeGeneres", "Drew Barrymore"],
      careerPaths: ["Artist", "Counselor", "Human Resources", "Journalist", "Marketer", "Educator"]
    },
    "entp": {
      name: "The Debater",
      overview: "ENTPs are smart and curious thinkers who cannot resist an intellectual challenge. They love brainstorming and innovating. They are quick-witted, argumentative, and resourceful.",
      characteristics: [
        "Innovative and quick-witted",
        "Argumentative and witty",
        "Logical and analytical",
        "Resourceful",
        "Prone to boredom"
      ],
      cognitiveFunctions: {
        dominant: "Extraverted Intuition (Ne): Explores new ideas and possibilities, makes connections, and generates inspiring thoughts.",
        auxiliary: "Introverted Thinking (Ti): Seeks internal logic and consistency, analyzes information internally, and tries to understand systems.",
        tertiary: "Extraverted Feeling (Fe): Understands others' emotional needs and strives to create harmony, values social norms.",
        inferior: "Introverted Sensing (Si): May focus less on details and routines, sometimes struggling with practical matters."
      },
      areasForGrowth: [
        "Being more consistent in seeing tasks through to completion.",
        "Increasing emotional sensitivity and paying more attention to others' feelings.",
        "Focusing more on practical details.",
        "Being more constructive in arguments."
      ],
      compatibilityNotes: "Can form deep connections with introverted and intuitive types like INFJs and INTJs, as these types appreciate ENTPs' intellectual curiosity and offer them new perspectives.",
      famousPersonalities: ["Benjamin Franklin", "Mark Twain", "Thomas Edison", "Steve Wozniak"],
      careerPaths: ["Lawyer", "Entrepreneur", "Engineer", "Consultant", "Scientist", "Marketer"]
    },
    "estj": {
      name: "The Executive",
      overview: "ESTJs are excellent administrators, unsurpassed at managing things or people. They love maintaining traditions and order. They are organized, logical, and decisive, driven by a strong sense of responsibility.",
      characteristics: [
        "Organized and methodical",
        "Logical and decisive",
        "Responsible and reliable",
        "Traditional and rule-abiding",
        "Natural leadership ability"
      ],
      cognitiveFunctions: {
        dominant: "Extraverted Thinking (Te): Establishes logical systems, seeks efficiency, and organizes the external world to achieve goals.",
        auxiliary: "Introverted Sensing (Si): Gathers information from past experiences and concrete facts, remembers details, and values stability.",
        tertiary: "Extraverted Intuition (Ne): Explores new ideas and possibilities, makes connections, and generates inspiring thoughts.",
        inferior: "Introverted Feeling (Fi): Adheres to personal values and moral principles, seeks internal harmony, and has emotional depth."
      },
      areasForGrowth: [
        "Being more flexible and adapting to change.",
        "Developing emotional understanding and paying more attention to others' feelings.",
        "Being open to new ideas and different perspectives.",
        "Learning to let go of control."
      ],
      compatibilityNotes: "Often get along well with introverted and sensitive types like ISFPs and INFPs, as these types appreciate ESTJs' order while adding emotional depth and creativity to their lives.",
      famousPersonalities: ["George W. Bush", "John D. Rockefeller", "Martha Stewart", "James Monroe"],
      careerPaths: ["Manager", "Management Consultant", "Police Chief", "Judge", "Military Commander", "Financier"]
    },
    "esfj": {
      name: "The Consul",
      overview: "ESFJs are extraordinarily caring, social, and popular people. They are dedicated to fostering social harmony and supporting their communities. They are warm, organized, and loyal, finding great joy in helping others.",
      characteristics: [
        "Warm and social",
        "Organized and responsible",
        "Loyal and empathetic",
        "Practical and helpful",
        "Seeks harmony and cooperation"
      ],
      cognitiveFunctions: {
        dominant: "Extraverted Feeling (Fe): Understands others' emotional needs and strives to create harmony, values social norms.",
        auxiliary: "Introverted Sensing (Si): Gathers information from past experiences and concrete facts, remembers details, and values stability.",
        tertiary: "Extraverted Intuition (Ne): Explores new ideas and possibilities, makes connections, and generates inspiring thoughts.",
        inferior: "Introverted Thinking (Ti): May struggle with seeking internal logic and consistency, analyzing information internally."
      },
      areasForGrowth: [
        "Dealing with criticism more constructively.",
        "Expressing their own needs and boundaries more clearly.",
        "Developing independent decision-making skills.",
        "Letting go of the desire to please everyone."
      ],
      compatibilityNotes: "Often get along well with introverted and sensitive types like ISFPs and INFPs, as these types appreciate ESFJs' warmth and social nature while adding emotional depth and creativity.",
      famousPersonalities: ["Bill Clinton", "Anne Hathaway", "Jennifer Garner", "Sally Field"],
      careerPaths: ["Teacher", "Nurse", "Event Planner", "Customer Service", "Counselor", "Religious Leader"]
    },
    "enfj": {
      name: "The Protagonist",
      overview: "ENFJs are charismatic and inspiring leaders. They are passionate about helping others reach their full potential. They are empathetic, organized, and responsible, enjoying motivating and guiding people around them.",
      characteristics: [
        "Empathetic and inspiring",
        "Organized and responsible",
        "Warm and social",
        "Visionary and decisive",
        "Focused on helping others"
      ],
      cognitiveFunctions: {
        dominant: "Extraverted Feeling (Fe): Understands others' emotional needs and strives to create harmony, values social norms.",
        auxiliary: "Introverted Intuition (Ni): Sees deep insights and patterns for the future, seeks symbolic meanings, and develops long-term visions.",
        tertiary: "Extraverted Sensing (Se): Focuses on immediate sensory experiences, explores their environment, and finds practical solutions.",
        inferior: "Introverted Thinking (Ti): May struggle with seeking internal logic and consistency, analyzing information internally."
      },
      areasForGrowth: [
        "Learning self-care and preventing burnout.",
        "Dealing with conflicts more constructively.",
        "Avoiding overcommitment.",
        "Letting go of the desire to please everyone."
      ],
      compatibilityNotes: "Can form deep connections with introverted and sensitive types like INFPs and ISFPs, as these types appreciate ENFJs' leadership and compassion while adding emotional depth and authenticity.",
      famousPersonalities: ["Barack Obama", "Oprah Winfrey", "Maya Angelou", "Ronald Reagan"],
      careerPaths: ["Teacher", "Counselor", "Politician", "Manager", "Religious Leader", "Writer"]
    },
    "entj": {
      name: "The Commander",
      overview: "ENTJs are bold, imaginative, and strong-willed leaders. They are natural strategists and thrive on challenges and achieving goals. They are decisive, confident, and efficient.",
      characteristics: [
        "Decisive and confident",
        "Strategic and visionary",
        "Assertive and efficient",
        "Natural leadership ability",
        "Can be critical and demanding"
      ],
      cognitiveFunctions: {
        dominant: "Extraverted Thinking (Te): Establishes logical systems, seeks efficiency, and organizes the external world to achieve goals.",
        auxiliary: "Introverted Intuition (Ni): Sees deep insights and patterns for the future, seeks symbolic meanings, and develops long-term visions.",
        tertiary: "Extraverted Sensing (Se): Focuses on immediate sensory experiences, explores their environment, and finds practical solutions.",
        inferior: "Introverted Feeling (Fi): Adheres to personal values and moral principles, seeks internal harmony, and has emotional depth."
      },
      areasForGrowth: [
        "Developing empathy and paying more attention to others' feelings.",
        "Being a better listener and showing patience.",
        "Recognizing and appreciating others' emotions.",
        "Learning to let go of control."
      ],
      compatibilityNotes: "Often get along well with introverted and logical types like INTPs and ISTPs, as these types appreciate ENTJs' leadership and strategic thinking while offering them new ideas and practical solutions.",
      famousPersonalities: ["Steve Jobs", "Margaret Thatcher", "Napoleon Bonaparte", "Franklin D. Roosevelt"],
      careerPaths: ["CEO", "Entrepreneur", "Lawyer", "Consultant", "Executive", "Politician"]
    },
  };

  const typeInfo = detailedMbtiData[typeId.toLowerCase()] || {
    name: "Type Not Found",
    overview: "Detailed information for this personality type is not yet available.",
    characteristics: [],
    cognitiveFunctions: {},
    areasForGrowth: [],
    compatibilityNotes: "",
    famousPersonalities: [],
    careerPaths: []
  };

  return (
    <div className="container mx-auto px-4 py-12 font-inter min-h-screen bg-gray-50">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6 leading-tight">
        {typeInfo.name} ({typeId.toUpperCase()})
      </h1>
      <p className="text-xl text-center text-gray-700 mb-10 max-w-3xl mx-auto">
        {typeInfo.overview}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-4">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Characteristics</h2>
          {typeInfo.characteristics.length > 0 ? (
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              {typeInfo.characteristics.map((char, index) => (
                <li key={index}>{char}</li>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-gray-700">Characteristic details are not available.</p>
          )}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-4">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Cognitive Functions</h2>
          {typeInfo.cognitiveFunctions.dominant ? (
            <div className="space-y-3 text-lg text-gray-700">
              <p><strong>Dominant:</strong> {typeInfo.cognitiveFunctions.dominant}</p>
              <p><strong>Auxiliary:</strong> {typeInfo.cognitiveFunctions.auxiliary}</p>
              <p><strong>Tertiary:</strong> {typeInfo.cognitiveFunctions.tertiary}</p>
              <p><strong>Inferior:</strong> {typeInfo.cognitiveFunctions.inferior}</p>
            </div>
          ) : (
            <p className="text-lg text-gray-700">Cognitive function details are not available.</p>
          )}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-4">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Areas for Growth</h2>
          {typeInfo.areasForGrowth.length > 0 ? (
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              {typeInfo.areasForGrowth.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-gray-700">Areas for growth details are not available.</p>
          )}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-4">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Compatibility Notes</h2>
          <p className="text-lg text-gray-700">{typeInfo.compatibilityNotes || "Compatibility notes are not available."}</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-4">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Famous Personalities</h2>
          {typeInfo.famousPersonalities.length > 0 ? (
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              {typeInfo.famousPersonalities.map((person, index) => (
                <li key={index}>{person}</li>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-gray-700">Famous personality examples for this type are not available.</p>
          )}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-4">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Potential Career Paths</h2>
          {typeInfo.careerPaths.length > 0 ? (
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              {typeInfo.careerPaths.map((path, index) => (
                <li key={index}>{path}</li>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-gray-700">Potential career paths for this type are not available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalityDetailPage;
