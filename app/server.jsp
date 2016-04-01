<%@page import="java.io.BufferedReader"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%
// 	System.out.println(request.getParameter(arg0));
	BufferedReader br = request.getReader();
	StringBuffer sb = new StringBuffer();
	String line = "";
	while ((line = br.readLine()) != null) {
		sb.append(line);
	}
	System.out.println(sb);
	// 		System.out.println(sb);
%>