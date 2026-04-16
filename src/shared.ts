export type ChatMessage = {
	id: string;
	content: string;
	user: string;
	role: "user" | "assistant";
};

export type Message =
	| {
			type: "add";
			id: string;
			content: string;
			user: string;
			role: "user" | "assistant";
	  }
	| {
			type: "update";
			id: string;
			content: string;
			user: string;
			role: "user" | "assistant";
	  }
	| {
			type: "all";
			messages: ChatMessage[];
	  };

export const names = [
	"BBU Member 1",
	"BBU Member 2",
	"BBU Member 3",
	"BBU Member 4",
	"BBU Member 5",
	"BBU Member 6",
	"BBU Member 7",
	"BBU Member 8",
	"BBU Member 9",
	"BBU Member 10",
	"BBU Member 11",
	"BBU Member 12",
	"BBU Member 13",
	"BBU Member 14",
	"BBU Member 15",
	"BBU Member 16",
	"BBU Member 17",
	"BBU Member 18",
	"BBU Member 19",
	"BBU Member 20",
	
];
