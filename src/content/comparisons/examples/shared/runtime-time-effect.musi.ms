let datetime := import "@std/datetime";

export let stamp () : Int := datetime.unixTimeMillis(datetime.nowUnix());
