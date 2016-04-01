<%@page import="java.util.ArrayList"%>
<jsp:useBean id="obj" class="banking.AccountService" />
<%
	// 	String bookId = request.getParameter("mybookbid");
	// 	session.setAttribute("bookId", bookId);

	ArrayList<String> accounts = obj.retrieveAccounts();
// 	String res = "{";
// 	for(int i=0;i<accounts.size();i++){
// 		res = res + "/""+"";
// 	}

	out.println(obj.retrieveAccounts());
%>