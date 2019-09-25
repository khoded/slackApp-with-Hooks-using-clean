class botUsecase {
  constructor(repo) {
    this.repo = repo;
  }

  async reportError(errorContent) {
    try {
      const data = await this.repo.reportError(errorContent)
      return data
    } catch (error) {
      throw error
    }
  }
}

module.exports = botUsecase;