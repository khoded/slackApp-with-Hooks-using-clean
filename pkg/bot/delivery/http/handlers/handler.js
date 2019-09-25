class handlers {
  constructor(usecase) {
    this.usecase = usecase
  }

  async reportError(req, res) {
    try {
      const errorContent = req.body
      const data = await this.usecase.reportError(errorContent)
      res.status(200).json({
        status: 'success',
        message: 'Error report sent to slack WorkSpace',
        data: errorContent
      });
    } catch (error) {
      res.status(400).json({
        status: 'Error',
        message: 'EviconBot is down report not sent',
        data: error
      });
    }
  }
}

module.exports = handlers;