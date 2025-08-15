export class Tag {
  static readonly PANTS = new Tag("Pants", "red");
  static readonly SHIRT = new Tag("Shirt", "blue");
  static readonly HOODIE = new Tag("Hoodie", "green");
  static readonly ACCESSORY = new Tag("Accessory", "brown");

  private constructor(private readonly key: string, public readonly color: string) {

  }
  toString() {
    return this.key;
  }
}
