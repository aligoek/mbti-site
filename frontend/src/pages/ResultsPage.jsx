// src/pages/ResultsPage.jsx
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TestContext } from '../context/TestContext';

const ResultsPage = () => {
  // Directly getting mbtiResult from TestContext
  const { mbtiResult } = useContext(TestContext);
  const navigate = useNavigate();

  // Detailed data for MBTI types
  const mbtiData = {
    "ISTJ": {
      name: "The Logistician",
      summary: "ISTJs are practical, fact-minded individuals who are highly responsible and organized. They pay close attention to details and take their duties very seriously, thriving in environments that value structure and tradition.",
      strengths: ["Rational", "Responsible", "Detail-oriented", "Reliable", "Orderly", "Patient"],
      weaknesses: ["Inflexible", "Can appear insensitive", "Resistant to change", "Overly critical", "Reserved"],
      careerPaths: ["Accountant", "Administrator", "Police Officer", "Military Personnel", "IT Analyst", "Auditor", "Judge"],
      relationshipInsights: "In relationships, ISTJs value loyalty, trustworthiness, and practical support. They express affection through actions rather than words and seek partners who appreciate their stability and commitment.",
      famousIndividuals: ["George Washington", "Angela Merkel", "Natalie Portman", "Queen Victoria"]
    },
    "ISFJ": {
      name: "The Defender",
      summary: "ISFJs are warm, conscientious, helpful, and loyal individuals. They are highly sensitive to the needs of others and are dedicated protectors, often putting others' well-being before their own.",
      strengths: ["Empathetic", "Loyal", "Patient", "Practical", "Observant", "Hardworking"],
      weaknesses: ["Overly self-sacrificing", "Conflict-avoidant", "Sensitive to criticism", "Neglects own needs", "Overly humble"],
      careerPaths: ["Nurse", "Teacher", "Social Worker", "Counselor", "Human Resources", "Librarian"],
      relationshipInsights: "In relationships, ISFJs prioritize harmony, support, and deep emotional connections. They are devoted partners who strive to create a stable and nurturing environment.",
      famousIndividuals: ["Queen Elizabeth II", "Anne Hathaway", "Vin Diesel", "Mother Teresa"]
    },
    "INFJ": {
      name: "The Advocate",
      summary: "INFJs are idealistic, deep-thinking, empathetic, and decisive. They carry a strong desire to serve humanity, driven by a profound sense of purpose and a rich inner world of insights.",
      strengths: ["Visionary", "Empathetic", "Determined", "Inspiring", "Insightful", "Principled"],
      weaknesses: ["Overly sensitive", "Perfectionistic", "Mysterious", "Risk of burnout", "Can be private"],
      careerPaths: ["Writer", "Counselor", "Psychologist", "University Professor", "Artist", "Humanitarian"],
      relationshipInsights: "INFJs seek deep, meaningful connections and shared values in relationships. They are highly intuitive about their partners' needs and desire profound understanding.",
      famousIndividuals: ["Martin Luther King Jr.", "Nelson Mandela", "Oprah Winfrey", "Carl Jung"]
    },
    "INTJ": {
      name: "The Architect",
      summary: "INTJs are logical, innovative, independent, and strategic thinkers. They enjoy finding solutions to complex problems and are driven by a desire to improve systems and the world around them.",
      strengths: ["Strategic", "Logical", "Independent", "Decisive", "Visionary", "Knowledgeable"],
      weaknesses: ["Arrogant", "Can appear unemotional", "Socially awkward", "Overly analytical", "Impatient"],
      careerPaths: ["Scientist", "Engineer", "Strategist", "Professor", "Architect", "Software Developer"],
      relationshipInsights: "In relationships, INTJs value intellectual connection and personal growth. They seek partners who can engage in stimulating discussions and respect their need for independence.",
      famousIndividuals: ["Elon Musk", "Michelle Obama", "Isaac Newton", "Stephen Hawking"]
    },
    "ISTP": {
      name: "The Virtuoso",
      summary: "ISTPs are practical, analytical, spontaneous, and curious. They love working with their hands and solving problems, often excelling in fields that require technical skill and adaptability.",
      strengths: ["Practical", "Observant", "Flexible", "Calm", "Resourceful", "Action-oriented"],
      weaknesses: ["Can be insensitive", "Risk-taking", "Commitment issues", "Prone to boredom", "Private"],
      careerPaths: ["Engineer", "Mechanic", "Pilot", "Athlete", "Emergency Responder", "Craftsman"],
      relationshipInsights: "In relationships, ISTPs value freedom, independence, and shared activities. They prefer partners who are self-reliant and enjoy spontaneous adventures.",
      famousIndividuals: ["Clint Eastwood", "Bruce Lee", "Bear Grylls", "Chuck Yeager"]
    },
    "ISFP": {
      name: "The Adventurer",
      summary: "ISFPs are artistic, gentle, flexible, and sensitive. They live in the moment and appreciate beauty, expressing themselves through creativity and a deep connection to their sensory experiences.",
      strengths: ["Artistic", "Sensitive", "Flexible", "Gentle", "Spontaneous", "Empathetic"],
      weaknesses: ["Conflict-avoidant", "Indecisive", "Sensitive to criticism", "Difficulty with planning", "Impulsive"],
      careerPaths: ["Artist", "Musician", "Designer", "Veterinarian", "Physical Therapist", "Dancer"],
      relationshipInsights: "In relationships, ISFPs seek harmony, emotional support, and shared experiences. They are affectionate and loyal, valuing authenticity and mutual understanding.",
      famousIndividuals: ["Michael Jackson", "Britney Spears", "Avril Lavigne", "Frida Kahlo"]
    },
    "INFP": {
      name: "The Mediator",
      summary: "INFPs are idealistic, creative, curious, and value-driven. They are deeply committed to their personal values and strive to make the world a better place through their unique vision and empathy.",
      strengths: ["Creative", "Empathetic", "Idealistic", "Open-minded", "Authentic", "Compassionate"],
      weaknesses: ["Impractical", "Indecisive", "Overly emotional", "Sensitive to criticism", "Prone to self-doubt"],
      careerPaths: ["Writer", "Artist", "Counselor", "Psychologist", "Social Worker", "Librarian"],
      relationshipInsights: "INFPs seek deep, authentic connections and shared values in relationships. They desire a partner who understands their inner world and supports their ideals.",
      famousIndividuals: ["William Shakespeare", "J.R.R. Tolkien", "Johnny Depp", "Virginia Woolf"]
    },
    "INTP": {
      name: "The Logician",
      summary: "INTPs are logical, innovative, independent, and analytical. They enjoy solving theoretical problems and have an insatiable thirst for knowledge, constantly seeking to understand the underlying principles of everything.",
      strengths: ["Logical", "Innovative", "Analytical", "Independent", "Curious", "Objective"],
      weaknesses: ["Socially awkward", "Can appear insensitive", "Overly critical", "Impractical", "Procrastinates"],
      careerPaths: ["Scientist", "Computer Programmer", "Philosopher", "Researcher", "University Professor", "Engineer"],
      relationshipInsights: "In relationships, INTPs value intellectual compatibility and independence. They seek partners who can engage in stimulating conversations and respect their need for personal space.",
      famousIndividuals: ["Albert Einstein", "Bill Gates", "Marie Curie", "Isaac Asimov"]
    },
    "ESTP": {
      name: "The Entrepreneur",
      summary: "ESTPs are energetic, spontaneous, realistic, and bold. They love taking risks and experiencing new things, often excelling in dynamic environments where quick thinking and action are required.",
      strengths: ["Energetic", "Practical", "Spontaneous", "Persuasive", "Adaptable", "Action-oriented"],
      weaknesses: ["Impatient", "Risk-taking", "Can be insensitive", "Difficulty with long-term planning", "Impulsive"],
      careerPaths: ["Entrepreneur", "Marketer", "Sales Representative", "Athlete", "Emergency Responder", "Police Officer"],
      relationshipInsights: "In relationships, ESTPs value excitement, spontaneity, and shared activities. They seek partners who are adventurous and enjoy living in the moment.",
      famousIndividuals: ["Donald Trump", "Madonna", "Ernest Hemingway", "Jack Nicholson"]
    },
    "ESFP": {
      name: "The Entertainer",
      summary: "ESFPs are extraverted, joyful, spontaneous, and social. They love interacting with people and are natural performers, bringing energy and enthusiasm to any gathering.",
      strengths: ["Social", "Joyful", "Flexible", "Practical", "Charming", "Optimistic"],
      weaknesses: ["Easily distracted", "Difficulty with planning", "Overly emotional", "Sensitive to criticism", "Impulsive"],
      careerPaths: ["Entertainment Industry", "Marketer", "Teacher", "Fashion Designer", "Tour Guide", "Event Planner"],
      relationshipInsights: "In relationships, ESFPs value fun, excitement, and emotional support. They are affectionate and expressive, seeking partners who enjoy social activities and bring joy to their lives.",
      famousIndividuals: ["Marilyn Monroe", "Elvis Presley", "Jamie Oliver", "Will Smith"]
    },
    "ENFP": {
      name: "The Campaigner",
      summary: "ENFPs are enthusiastic, creative, social, and inspiring. They love generating new ideas and are driven by a desire to connect with others and explore endless possibilities, making them natural motivators.",
      strengths: ["Creative", "Enthusiastic", "Social", "Inspiring", "Optimistic", "Adaptable"],
      weaknesses: ["Disorganized", "Overthinking", "Easily stressed", "Can be overly emotional", "Overcommits"],
      careerPaths: ["Journalist", "Counselor", "Artist", "Entrepreneur", "Consultant", "Human Resources"],
      relationshipInsights: "ENFPs seek deep, meaningful connections and shared adventures in relationships. They desire partners who are open-minded, supportive of their dreams, and enjoy exploring new ideas together.",
      famousIndividuals: ["Will Smith", "Robin Williams", "Quentin Tarantino", "Walt Disney"]
    },
    "ENTP": {
      name: "The Debater",
      summary: "ENTPs are intelligent, argumentative, innovative, and quick-witted. They love exploring new ideas and challenging existing norms, thriving on intellectual debate and creative problem-solving.",
      strengths: ["Intelligent", "Innovative", "Argumentative", "Quick-witted", "Resourceful", "Challenging"],
      weaknesses: ["Impatient", "Can be insensitive", "Overly critical", "Commitment issues", "Prone to boredom"],
      careerPaths: ["Lawyer", "Engineer", "Entrepreneur", "Politician", "Consultant", "Scientist"],
      relationshipInsights: "In relationships, ENTPs value intellectual stimulation and open communication. They seek partners who can match their wit, enjoy lively debates, and encourage their intellectual pursuits.",
      famousIndividuals: ["Mark Twain", "Thomas Edison", "Sacha Baron Cohen", "Benjamin Franklin"]
    },
    "ESTJ": {
      name: "The Executive",
      summary: "ESTJs are practical, orderly, decisive, and traditional. They love to lead and take responsibility, excelling in roles that require strong organizational skills and a commitment to established procedures.",
      strengths: ["Organized", "Decisive", "Responsible", "Leader", "Reliable", "Efficient"],
      weaknesses: ["Inflexible", "Can be insensitive", "Overly controlling", "Critical", "Stubborn"],
      careerPaths: ["Manager", "Police Chief", "Military Leader", "Financier", "Project Manager", "Administrator"],
      relationshipInsights: "In relationships, ESTJs value order, responsibility, and practical support. They are loyal and committed partners who appreciate structure and mutual respect.",
      famousIndividuals: ["George W. Bush", "Condoleezza Rice", "Dr. Phil", "James Monroe"]
    },
    "ESFJ": {
      name: "The Consul",
      summary: "ESFJs are warm, social, conscientious, and helpful. They love serving others and are dedicated to fostering harmony and support within their communities and relationships.",
      strengths: ["Social", "Helpful", "Organized", "Loyal", "Empathetic", "Caring"],
      weaknesses: ["Overly sensitive", "Conflict-avoidant", "Seeks approval", "Neglects own needs", "Overly self-sacrificing"],
      careerPaths: ["Teacher", "Nurse", "Social Worker", "Counselor", "Sales Representative", "Customer Service"],
      relationshipInsights: "In relationships, ESFJs value harmony, support, and emotional connection. They are devoted and nurturing partners who prioritize their loved ones' happiness.",
      famousIndividuals: ["Bill Clinton", "Jennifer Garner", "Taylor Swift", "Sally Field"]
    },
    "ENFJ": {
      name: "The Protagonist",
      summary: "ENFJs are charismatic, inspiring, empathetic, and natural leaders. They love guiding others and are passionate about helping people reach their full potential, often serving as motivators and mentors.",
      strengths: ["Charismatic", "Inspiring", "Empathetic", "Leader", "Visionary", "Organized"],
      weaknesses: ["Overly self-sacrificing", "Overly emotional", "Perfectionistic", "Neglects own needs", "Can be manipulative"],
      careerPaths: ["Teacher", "Counselor", "Manager", "Politician", "Human Resources", "Public Speaker"],
      relationshipInsights: "In relationships, ENFJs seek deep connections, growth, and mutual support. They are passionate and nurturing partners who strive to inspire and uplift their loved ones.",
      famousIndividuals: ["Barack Obama", "Oprah Winfrey", "Maya Angelou", "Ronald Reagan"]
    },
    "ENTJ": {
      name: "The Commander",
      summary: "ENTJs are decisive, strategic, logical, and natural leaders. They love organizing to achieve goals and thrive on challenges, possessing a strong will and a clear vision for the future.",
      strengths: ["Leader", "Strategic", "Logical", "Decisive", "Assertive", "Confident"],
      weaknesses: ["Arrogant", "Can be insensitive", "Impatient", "Overly controlling", "Demanding"],
      careerPaths: ["CEO", "Manager", "Lawyer", "Entrepreneur", "Politician", "Consultant"],
      relationshipInsights: "In relationships, ENTJs value intellectual compatibility, growth, and shared goals. They seek partners who are ambitious, intelligent, and can stand as equals.",
      famousIndividuals: ["Steve Jobs", "Margaret Thatcher", "Gordon Ramsay", "Napoleon Bonaparte"]
    },
    "UNKNOWN": {
      name: "Unknown Type",
      summary: "Your MBTI type could not be determined. Please try the test again or provide more text.",
      strengths: [],
      weaknesses: [],
      careerPaths: [],
      relationshipInsights: "Relationship insights are not available for an unknown type.",
      famousIndividuals: []
    }
  };

  // Set resultInfo to UNKNOWN if mbtiResult is null or not a valid type
  const resultInfo = mbtiResult && mbtiData[mbtiResult] ? mbtiData[mbtiResult] : mbtiData["UNKNOWN"];

  // Redirect to home page if mbtiResult is null
  useEffect(() => {
    if (!mbtiResult) {
      console.warn("MBTI result not found, redirecting to home page.");
      navigate('/');
    }
  }, [mbtiResult, navigate]);

  // Show loading indicator until mbtiResult is available or redirection occurs
  if (!mbtiResult) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <p className="text-xl text-gray-700">Loading results or test not completed...</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Return to Home Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 font-inter min-h-screen bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8 leading-tight">Your MBTI Test Results</h2>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-3xl mx-auto text-center">
        <>
          <p className="text-2xl text-gray-600 mb-4">Your Personality Type Is:</p>
          <h3 className="text-6xl font-extrabold text-blue-700 mb-6 animate-pulse">{mbtiResult}</h3>
          <p className="text-3xl font-semibold text-gray-800 mb-8">{resultInfo.name}</p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">{resultInfo.summary}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Strengths
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {resultInfo.strengths.length > 0 ? (
                  resultInfo.strengths.map((s, i) => <li key={i}>{s}</li>)
                ) : (
                  <li>No specific strengths listed.</li>
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
                Weaknesses
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {resultInfo.weaknesses.length > 0 ? (
                  resultInfo.weaknesses.map((w, i) => <li key={i}>{w}</li>)
                ) : (
                  <li>No specific weaknesses listed.</li>
                )}
              </ul>
            </div>
          </div>

          <div className="text-left mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <svg className="w-6 h-6 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17.555 17.293A4.999 4.999 0 0016 15c-1.399 0-2.736.357-3.927.97A6.001 6.001 0 0110 18a6.001 6.001 0 01-2.073-2.03C6.736 15.357 5.399 15 4 15a4.999 4.999 0 00-1.555 2.293A8 8 0 1010 2a8 8 0 007.555 15.293z"></path></svg>
              Career Paths
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {resultInfo.careerPaths.length > 0 ? (
                resultInfo.careerPaths.map((c, i) => <li key={i}>{c}</li>)
              ) : (
                <li>No specific career paths listed.</li>
              )}
            </ul>
          </div>

          <div className="text-left mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <svg className="w-6 h-6 text-pink-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              Relationship Insights
            </h4>
            <p className="text-gray-700">{resultInfo.relationshipInsights || "No specific relationship insights available."}</p>
          </div>

          {resultInfo.famousIndividuals.length > 0 && (
            <div className="text-left mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 012.586 13H4v1a1 1 0 011 1h12a1 1 0 011-1v-1h1.414a1 1 0 01.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 100-6 3 3 0 000 6z"></path></svg>
                Famous Individuals of This Type
              </h4>
              <p className="text-gray-700">{resultInfo.famousIndividuals.join(', ')}</p>
            </div>
          )}

          <button
            onClick={() => navigate(`/types/${mbtiResult.toLowerCase()}`)}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-6"
          >
            Click for Detailed Information
          </button>
        </>
      </div>
    </div>
  );
};

export default ResultsPage;
