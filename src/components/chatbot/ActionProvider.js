class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  handleGreeting = () => {
    const message = this.createChatBotMessage(
      "Hello! I'm here to help you learn about SMILE. What would you like to know about our school management system?"
    );
    this.addMessageToState(message);
  };

  handleAboutSmile = () => {
    const message = this.createChatBotMessage(
      "SMILE (School Management & Innovative Learning Environment) is a cutting-edge, web-based application designed to tackle the pressing challenges in educational systems. It offers comprehensive features for managing students, academics, examinations, communications, and more. Would you like to learn about specific features?"
    );
    this.addMessageToState(message);
  };

  handleFeatures = () => {
    const message = this.createChatBotMessage(
      "SMILE offers a comprehensive suite of features including:\n\n" +
      "🎓 Student Management\n" +
      "📚 Academic Settings\n" +
      "📝 Examination System\n" +
      "📊 Reports & Analytics\n" +
      "💰 Payment & Invoice Management\n" +
      "📱 Communication Tools\n" +
      "🚌 Transport Management\n" +
      "📅 Attendance Tracking\n\n" +
      "Which feature would you like to know more about?"
    );
    this.addMessageToState(message);
  };

  handleStudentFeatures = () => {
    const message = this.createChatBotMessage(
      "Our Student Management features include:\n\n" +
      "- Complete student information management\n" +
      "- Online admission system\n" +
      "- Student grouping & clubs\n" +
      "- Parent information tracking\n" +
      "- Student promotion system\n" +
      "- Import student data via CSV\n\n" +
      "Would you like to know about other features?"
    );
    this.addMessageToState(message);
  };

  handleExamFeatures = () => {
    const message = this.createChatBotMessage(
      "Our Examination System includes:\n\n" +
      "- Advanced grading system\n" +
      "- Online examination capability\n" +
      "- Question bank management\n" +
      "- Mark/Score management\n" +
      "- Multiple assessment types\n" +
      "- Exam scheduling\n" +
      "- Result processing & publishing\n\n" +
      "Would you like to learn about other features?"
    );
    this.addMessageToState(message);
  };

  handleAcademicFeatures = () => {
    const message = this.createChatBotMessage(
      "Academic Management features include:\n\n" +
      "- Class & subject management\n" +
      "- Syllabus management\n" +
      "- Assignment system\n" +
      "- Academic year settings\n" +
      "- Timetable scheduling\n" +
      "- Teacher management\n\n" +
      "Would you like to know about other features?"
    );
    this.addMessageToState(message);
  };

  handleReportFeatures = () => {
    const message = this.createChatBotMessage(
      "Our Reporting System includes:\n\n" +
      "- Terminal Report\n" +
      "- Master sheet report\n" +
      "- Expenses Report\n" +
      "- Fees Report\n" +
      "- Attendance reports\n" +
      "- Student Progress reports\n" +
      "- Custom report generation\n\n" +
      "Would you like to explore other features?"
    );
    this.addMessageToState(message);
  };

  handlePaymentFeatures = () => {
    const message = this.createChatBotMessage(
      "Payment & Financial features include:\n\n" +
      "- Online payment integration (PayPal & Mobile Money)\n" +
      "- Invoice generation\n" +
      "- Fee management\n" +
      "- Salary management\n" +
      "- PayRoll system\n" +
      "- Auto invoice generation\n\n" +
      "Would you like to know about other features?"
    );
    this.addMessageToState(message);
  };

  handleAttendanceFeatures = () => {
    const message = this.createChatBotMessage(
      "Attendance Management includes:\n\n" +
      "- Multiple user type attendance\n" +
      "- Real-time tracking\n" +
      "- Detailed attendance reports\n" +
      "- Teacher attendance management\n" +
      "- Student attendance tracking\n" +
      "- Staff attendance monitoring\n\n" +
      "Would you like to explore other features?"
    );
    this.addMessageToState(message);
  };

  handleCommunicationFeatures = () => {
    const message = this.createChatBotMessage(
      "Communication tools include:\n\n" +
      "- Email & SMS system\n" +
      "- Private messaging\n" +
      "- Group messaging\n" +
      "- Notice management\n" +
      "- Event announcements\n" +
      "- Custom email/SMS templates\n\n" +
      "Would you like to know about other features?"
    );
    this.addMessageToState(message);
  };

  handleTransportFeatures = () => {
    const message = this.createChatBotMessage(
      "Transport Management includes:\n\n" +
      "- Route management\n" +
      "- Vehicle tracking\n" +
      "- Transport scheduling\n" +
      "- Fee management\n" +
      "- Student transport assignment\n\n" +
      "Would you like to explore other features?"
    );
    this.addMessageToState(message);
  };

  handleDashboardFeatures = () => {
    const message = this.createChatBotMessage(
      "Our Dashboard features:\n\n" +
      "- Advanced statistics\n" +
      "- Multiple widgets\n" +
      "- Real-time updates\n" +
      "- Custom charts\n" +
      "- Performance metrics\n" +
      "- Quick access to key features\n\n" +
      "Would you like to know about other features?"
    );
    this.addMessageToState(message);
  };

  handleHelp = () => {
    const message = this.createChatBotMessage(
      "I can help you with:\n" +
      "- Understanding SMILE features\n" +
      "- Learning about specific modules\n" +
      "- Getting started guide\n" +
      "- Contact support\n\n" +
      "What would you like to know more about?"
    );
    this.addMessageToState(message);
  };

  handleContact = () => {
    const message = this.createChatBotMessage(
      "You can reach our support team at:\n" +
      "Email: support@smile.com\n" +
      "Phone: (555) 123-4567\n\n" +
      "We're available 24/7 to assist you!"
    );
    this.addMessageToState(message);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "I'm not sure I understand. You can ask me about:\n\n" +
      "- What is SMILE?\n" +
      "- Specific features (e.g., 'Tell me about student management')\n" +
      "- Getting help\n" +
      "- Contacting support\n\n" +
      "How can I assist you?"
    );
    this.addMessageToState(message);
  };
}

export default ActionProvider; 