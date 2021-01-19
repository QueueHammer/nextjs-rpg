export default interface IPosition {
  x: number;
  y: number;
}



export type IPartial = {
  [P in keyof IPosition]?: IPosition[P];
}