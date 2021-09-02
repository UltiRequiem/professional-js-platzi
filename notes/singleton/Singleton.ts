class Singleton {
  private static instance: Singleton

  // eslint-disable-next-line no-useless-constructor
  private constructor() {
    // init
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}

export default Singleton
