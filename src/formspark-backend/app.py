@app.route('/analyze-images', methods=['POST'])
def analyze_images():
    try:
        files = request.files.getlist("files")
        if len(files) != 3:
            return jsonify({"message": "Please upload exactly 3 pictures."}), 400

        # Analyze each image and compute individual scores
        scores = [analyze_image(file) for file in files]

        # Compute combined score
        combined_score = max(70, sum(scores) / len(scores))

        return jsonify({
            "results": {
                "combined_score": combined_score,
                "individual_scores": scores
            }
        })
    except Exception as e:
        return jsonify({"message": str(e)}), 500
