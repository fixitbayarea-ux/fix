# Deployment Notes for FixitBay.net

## Production Environment Variables

### Required Environment Variables for Kubernetes Deployment:

#### Backend (Required):
```bash
MONGO_URL=<production-mongodb-connection-string>
DB_NAME=<production-database-name>
ADMIN_USERNAME=<admin-username>
ADMIN_PASSWORD=<secure-admin-password>
JWT_SECRET_KEY=<secure-random-string-32+chars>
UPLOAD_DIR=/app/frontend/src/assets/services
```

#### Frontend (Required):
```bash
REACT_APP_BACKEND_URL=https://fixitbay.net/api
WDS_SOCKET_PORT=443
```

## Important Notes:

### MongoDB Configuration:
- **Development**: Uses `mongodb://localhost:27017` from .env file
- **Production**: Emergent should inject MONGO_URL environment variable pointing to production MongoDB service
- The backend code uses `override=False` in `load_dotenv()` so Kubernetes environment variables take precedence

### Security:
- ⚠️ **Before deploying to production**, generate secure values for:
  - `JWT_SECRET_KEY` - Use cryptographically secure random string (32+ characters)
  - `ADMIN_PASSWORD` - Use strong, unique password
- Never commit real production credentials to git

### Backend Configuration:
- Backend listens on `0.0.0.0:8001`
- API endpoints are prefixed with `/api`
- CORS is configured to allow all origins (can be restricted in production if needed)

### Frontend Configuration:
- Frontend runs on port 3000
- Hot reload enabled in development
- React build must use production REACT_APP_BACKEND_URL

## Deployment Checklist:

- [ ] Set production MONGO_URL in Kubernetes environment
- [ ] Set production DB_NAME (not "test_database")
- [ ] Generate and set secure JWT_SECRET_KEY
- [ ] Generate and set secure ADMIN_PASSWORD
- [ ] Verify REACT_APP_BACKEND_URL points to https://fixitbay.net/api
- [ ] Verify ingress routes /api/* to backend:8001
- [ ] Verify ingress routes /* to frontend:3000
- [ ] Test MongoDB connectivity from backend pod
- [ ] Verify API endpoint: https://fixitbay.net/api/status
- [ ] Verify frontend loads: https://fixitbay.net

## Troubleshooting:

### "Service temporarily unavailable" error:
1. Check backend pod logs: `kubectl logs <backend-pod-name>`
2. Verify MongoDB connection: Look for "Connecting to MongoDB" log
3. Check environment variables: `kubectl exec <backend-pod> -- env | grep MONGO`
4. Test API directly: `curl https://fixitbay.net/api/status`

### Backend fails to start:
- Most common cause: MongoDB connection failure
- Check MONGO_URL environment variable is set correctly in Kubernetes
- Verify MongoDB service is accessible from backend pod

### Frontend shows blank page:
- Check browser console for API errors
- Verify REACT_APP_BACKEND_URL in build
- Check CORS configuration if seeing CORS errors
