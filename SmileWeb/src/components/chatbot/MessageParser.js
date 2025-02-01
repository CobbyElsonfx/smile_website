class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCase = message.toLowerCase();

    // Basic queries
    if (lowerCase.includes('hello') || lowerCase.includes('hi')) {
      this.actionProvider.handleGreeting();
      return;
    }

    if (lowerCase.includes('what is smile') || lowerCase.includes('about smile')) {
      this.actionProvider.handleAboutSmile();
      return;
    }

    // Feature categories
    if (lowerCase.includes('student') || lowerCase.includes('admission')) {
      this.actionProvider.handleStudentFeatures();
      return;
    }

    if (lowerCase.includes('exam') || lowerCase.includes('assessment') || lowerCase.includes('grade')) {
      this.actionProvider.handleExamFeatures();
      return;
    }

    if (lowerCase.includes('academic') || lowerCase.includes('class') || lowerCase.includes('syllabus')) {
      this.actionProvider.handleAcademicFeatures();
      return;
    }

    if (lowerCase.includes('report') || lowerCase.includes('analytics')) {
      this.actionProvider.handleReportFeatures();
      return;
    }

    if (lowerCase.includes('payment') || lowerCase.includes('invoice') || lowerCase.includes('salary')) {
      this.actionProvider.handlePaymentFeatures();
      return;
    }

    if (lowerCase.includes('attendance')) {
      this.actionProvider.handleAttendanceFeatures();
      return;
    }

    if (lowerCase.includes('communication') || lowerCase.includes('message') || lowerCase.includes('sms') || lowerCase.includes('email')) {
      this.actionProvider.handleCommunicationFeatures();
      return;
    }

    if (lowerCase.includes('transport')) {
      this.actionProvider.handleTransportFeatures();
      return;
    }

    if (lowerCase.includes('dashboard')) {
      this.actionProvider.handleDashboardFeatures();
      return;
    }

    // General queries
    if (lowerCase.includes('features') || lowerCase.includes('what can you do')) {
      this.actionProvider.handleFeatures();
      return;
    }

    if (lowerCase.includes('help')) {
      this.actionProvider.handleHelp();
      return;
    }

    if (lowerCase.includes('contact') || lowerCase.includes('support')) {
      this.actionProvider.handleContact();
      return;
    }

    // Default response
    this.actionProvider.handleDefault();
  }
}

export default MessageParser; 